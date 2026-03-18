import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import os

# --- Milestone 1: Descriptive Statistics & Preparation ---
def run_milestone_1(df):
    print("\n🚀 [Milestone 1] Descriptive Statistics & EDA")
    os.makedirs("plots/milestone_1", exist_ok=True)
    
    # 2. Data Shape
    print(f"[+] Dataset Shape: {df.shape}")
    
    # 5. Descriptive Statistics (Mean, Median, Mode, Min, Max)
    stats = df.describe().T
    stats['median'] = df.median(numeric_only=True)
    stats['mode'] = df.mode(numeric_only=True).iloc[0]
    print("\n[+] Summary Statistics (Numerical):")
    print(stats[['mean', 'median', 'mode', 'min', 'max']])

    # 8. Correlation Matrix Visualization
    plt.figure(figsize=(10, 8))
    sns.heatmap(df.corr(numeric_only=True), annot=True, cmap='coolwarm', fmt=".2f")
    plt.title("Correlation Matrix: Traffic Features")
    plt.savefig("plots/milestone_1/1_correlation_matrix.png")
    plt.close()

# --- Milestone 2: Visual Data Analysis ---
def run_milestone_2(df):
    print("\n🚀 [Milestone 2] Visual Data Analysis")
    os.makedirs("plots/milestone_2", exist_ok=True)

    # 1. Feature Engineering: Create Hour and Month from date_time
    df['date_time'] = pd.to_datetime(df['date_time'])
    df['hour'] = df['date_time'].dt.hour
    df['month'] = df['date_time'].dt.month
    df['day_of_week'] = df['date_time'].dt.dayofweek
    print("[+] Feature Engineering: Added hour, month, day_of_week")

    # 2. Histograms: Traffic Volume
    plt.figure(figsize=(10, 6))
    sns.histplot(df['traffic_volume'], bins=30, kde=True, color='purple')
    plt.title("Histogram: Traffic Volume Distribution")
    plt.savefig("plots/milestone_2/2_traffic_histogram.png")
    plt.close()

    # 3. Box Plot: Traffic Volume by Weather
    plt.figure(figsize=(12, 6))
    sns.boxplot(x='weather_main', y='traffic_volume', data=df)
    plt.title("Box Plot: Traffic Volume by Weather Type")
    plt.xticks(rotation=45)
    plt.savefig("plots/milestone_2/3_traffic_weather_boxplot.png")
    plt.close()

    # 5. Violin Plot: Traffic Volume by Hour
    plt.figure(figsize=(12, 6))
    sns.violinplot(x='hour', y='traffic_volume', data=df)
    plt.title("Violin Plot: Traffic Volume by Hour of Day")
    plt.savefig("plots/milestone_2/4_traffic_hour_violin.png")
    plt.close()

    # 6. Scatter Plot: Temp vs Traffic
    # Filter 0 temp outliers (data cleanup placeholder)
    df_temp_clean = df[df['temp'] > 100]
    plt.figure(figsize=(10, 6))
    sns.scatterplot(x='temp', y='traffic_volume', data=df_temp_clean, alpha=0.1)
    plt.title("Scatter Plot: Temperature vs Traffic Volume")
    plt.savefig("plots/milestone_2/5_temp_traffic_scatter.png")
    plt.close()

    print("[Milestone 2 Completed] Advanced plots saved in /plots/milestone_2")

if __name__ == "__main__":
    os.makedirs("plots", exist_ok=True)
    data_path = "data/urban_traffic.csv"
    if os.path.exists(data_path):
        df = pd.read_csv(data_path)
        run_milestone_1(df)
        run_milestone_2(df)
    else:
        print("Data not found. Run previous step.")
