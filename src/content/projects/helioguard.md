---
title: HelioGuard
tagline: Explainable solar-flare forecasting
summary: My final-year research project — an explainable, full-stack machine-learning system that forecasts solar flares and tackles the hardest class to predict, intermediate M-class flares, with cost-sensitive learning and live SHAP explanations.
year: '2026'
role: Researcher & full-stack ML engineer
kind: Research
status: In progress
stack: [Python, PyTorch, scikit-learn, SHAP, FastAPI, React, Tailwind CSS]
highlights:
  - Targets the "M-class ambiguity trap", where intermediate flares overlap with both weaker and stronger classes
  - Cost-sensitive Class-Dependent Reward (CDR) training, built for roughly 49:1 class imbalance without duplicate oversampling
  - Data-resiliency pipeline using Isolation Forests and Pearson-correlation k-NN imputation for noisy, gappy telemetry
  - Live SHAP feature attributions served by FastAPI to a React dashboard
mark: ☀
color: '#ff8a1f'
featured: true
order: 0
---

## Why solar flares?

Solar flares are sudden bursts of magnetic energy from the Sun. The big ones disrupt power grids, damage satellites, degrade GPS and endanger high-altitude flights. Space-weather centres issue warnings so engineers can protect that infrastructure, but most machine-learning forecasters are black boxes. Operators have to decide whether to take costly defensive action without knowing *why* the model raised an alert.

## The problem: the M-class ambiguity trap

Flares are graded by strength. Models separate quiet periods and extreme **X-class** flares fairly well, but **M-class** flares sit in between, and their physical parameters overlap with both neighbours. Recent multi-class models perform worst on exactly this class. Yet the M threshold is where radio-blackout warnings and satellite-safing procedures start.

Two things make it hard:

- **Severe class imbalance.** Flaring examples are vastly outnumbered by quiet ones (about 49:1). Standard training with symmetric losses like cross-entropy biases models towards the easy majority.
- **Messy telemetry.** Space-telescope data streams are noisy and full of gaps.

## The approach

HelioGuard is an end-to-end, explainable forecasting framework built on the public **SWAN-SF / SHARP** benchmark: multivariate time series of solar active-region magnetic parameters from NASA's SDO/HMI.

1. **Data guard.** Unsupervised **Isolation Forests** filter outlier noise, and **Pearson-correlation-based k-NN imputation** fills missing values using physically correlated signals.
2. **Feature engineering.** Highly predictive SHARP parameters, such as total unsigned current helicity, free-energy proxies and polarity-inversion-line measures, tracked over a window of historical frames.
3. **Cost-sensitive learning.** Sequence models in **PyTorch** trained inside a **Class-Dependent Reward (CDR)** framework. A tuned penalty matrix punishes false alarms and missed flares asymmetrically to sharpen the M-class decision boundary without hurting X-class detection.
4. **Honest evaluation.** Train/test splits grouped by NOAA active region (no leakage), scored with the field's skill metrics: **TSS**, **HSS**, recall and false-alarm rate.
5. **Explainability you can use.** **SHAP** attributions served through an asynchronous **FastAPI** layer to an interactive **React + Tailwind** dashboard, so operators can see which physical parameters drove each forecast.

## Research questions

- How can a Class-Dependent Reward framework be tuned to resolve decision-boundary confusion for M-class flares?
- How far does combining Isolation Forests with correlation-based k-NN imputation stabilise models on noisy, multi-active-region telemetry?
- How can time-series explanations be visualised live in a dashboard to build operator trust?

## Status

In progress as my final-year BSc (Hons) Computer Science project at IIT / University of Westminster. I'll share results and lessons on the [blog](/blog) as they land.
