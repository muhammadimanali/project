import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb
import matplotlib.ticker as tkr

SRC = 'https://raw.githubusercontent.com/MoH-Malaysia/data-darah-public/main/donations_state.csv'
df = pd.read_csv(SRC)
df.date = pd.to_datetime(df.date)

