# Data Analysis Individual Project Report 📊
**Dataset:** Metro Interstate Traffic Volume
**Author:** Sir (Strategic AI Butler Julius)

---

## 1. Descriptive Statistics (Milestone 1)
- **Shape:** 48,204 rows, 9 columns.
- **Key Statistics:**
    - Mean Traffic Volume: 3,259 vehicles.
    - Median Temp: 282.45 K.
- **Insights:** The correlation matrix shows a strong negative relationship between night hours and traffic, which is intuitive.

## 2. Visual Analysis (Milestone 2)
- **Hourly Trends:** Violin plots reveal bi-modal distribution (morning and evening rush peaks).
- **Weather Impact:** Box plots show that while 'Clear' weather has higher median traffic, extreme rain doesn't fully stop the flow, suggesting high traffic resilience.

## 3. Hypothesis Evaluation (Milestone 3)
- **T-Test (Rush vs Midnight):** P-value ~ 0.000. Reject H0. Rush hour traffic is significantly higher (avg 4,819 vs 528).
- **ANOVA (Weather Categories):** P-value ~ 0.000. Reject H0. Weather type (Rain, Snow, Clear) statistically affects traffic volume.

## 4. Multidimensional Analysis (Milestone 4)
- **PCA:** 6 components are needed to explain 90% of the variance.
- **Clustering:** K-Means identified 3 distinct traffic states:
    - *Cluster 0:* Off-peak / Night flow.
    - *Cluster 1:* High-density rush hour.
    - *Cluster 2:* Weekend/Transition flow.

---
*Graphs and scripts are available in the `/analysis` directory.*
