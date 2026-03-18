import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.stats as stats
import os

# --- Milestone 3: Hypothesis Evaluation ---
def run_milestone_3(df):
    print("\n🚀 [Milestone 3] Hypothesis Evaluation")
    
    # 1. Null Hypothesis H0: No difference in traffic between rush hours and off-peak.
    # Group A: Rush Hour (7-9 AM, 4-6 PM)
    # Group B: Midnight (0-4 AM)
    
    df['date_time'] = pd.to_datetime(df['date_time'])
    df['hour'] = df['date_time'].dt.hour
    
    rush_hour = df[df['hour'].isin([7, 8, 9, 16, 17, 18])]['traffic_volume']
    midnight = df[df['hour'].isin([0, 1, 2, 3])]['traffic_volume']
    
    print(f"[+] Group A (Rush) Size: {len(rush_hour)}, Mean: {rush_hour.mean():.2f}")
    print(f"[+] Group B (Midnight) Size: {len(midnight)}, Mean: {midnight.mean():.2f}")
    
    # Independent Two-Sample t-Test
    t_stat, p_val = stats.ttest_ind(rush_hour, midnight)
    print(f"--- Independent Two-Sample t-Test ---")
    print(f"Statistic: {t_stat:.4f}, P-value: {p_val:.4f}")
    
    if p_val < 0.05:
        print("Result: Reject Null Hypothesis (Significant difference between Rush and Midnight traffic)")
    else:
        print("Result: Fail to Reject Null Hypothesis")

    # 2. ANOVA: Difference between Weather Categories
    # Focus on Rain, Snow, and Clear
    weather_groups = []
    categories = ['Rain', 'Snow', 'Clear']
    for cat in categories:
        weather_groups.append(df[df['weather_main'] == cat]['traffic_volume'])
    
    f_stat, p_val_anova = stats.f_oneway(*weather_groups)
    print(f"\n--- ANOVA Test (Rain vs Snow vs Clear) ---")
    print(f"Statistic: {f_stat:.4f}, P-value: {p_val_anova:.4f}")
    
    if p_val_anova < 0.05:
        print("Result: Reject Null Hypothesis (Weather significantly affects traffic volume)")
    else:
        print("Result: Fail to Reject Null Hypothesis")

# --- Milestone 4: Multidimensional Analysis (PCA) ---
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

def run_milestone_4(df):
    print("\n🚀 [Milestone 4] Multidimensional Analysis (PCA & Clustering)")
    os.makedirs("plots/milestone_4", exist_ok=True)
    
    # 1. Feature Selection & Scaling
    # Numerical features: temp, rain_1h, snow_1h, clouds_all, hour, month
    df['hour'] = df['date_time'].dt.hour
    df['month'] = df['date_time'].dt.month
    features = ['temp', 'rain_1h', 'snow_1h', 'clouds_all', 'hour', 'month']
    X = df[features]
    
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    
    # 2. PCA to explain 90% variance
    pca = PCA()
    pca.fit(X_scaled)
    cumulative_variance = np.cumsum(pca.explained_variance_ratio_)
    n_components = np.argmax(cumulative_variance >= 0.90) + 1
    print(f"[+] Components required for 90% variance: {n_components}")
    
    pca_final = PCA(n_components=n_components)
    X_pca = pca_final.fit_transform(X_scaled)
    
    # 3. K-Means Clustering (n=3 for Low, Med, High volume patterns)
    kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
    clusters = kmeans.fit_predict(X_pca)
    
    # 4. Visualization (PC1 vs PC2)
    plt.figure(figsize=(10, 8))
    plt.scatter(X_pca[:, 0], X_pca[:, 1], c=clusters, cmap='viridis', alpha=0.3)
    plt.title(f"K-Means Clustering on PCA Space (n=3)")
    plt.xlabel("Principal Component 1")
    plt.ylabel("Principal Component 2")
    plt.savefig("plots/milestone_4/6_pca_clusters.png")
    plt.close()
    
    print("[Milestone 4 Completed] PCA projections saved.")

if __name__ == "__main__":
    os.makedirs("plots", exist_ok=True)
    data_path = "data/urban_traffic.csv"
    if os.path.exists(data_path):
        df = pd.read_csv(data_path)
        df['date_time'] = pd.to_datetime(df['date_time'])
        run_milestone_3(df)
        run_milestone_4(df)
    else:
        print("Data not found.")
