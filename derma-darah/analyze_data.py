import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb
import matplotlib.ticker as tkr

SRC = 'https://raw.githubusercontent.com/MoH-Malaysia/data-darah-public/main/donations_state.csv'
donate_retention_path = "blood_donation_retention_2024.parquet"
donate_frequency = pd.read_parquet(donate_retention_path)
# data = pd.read_csv(SRC, index_col = 'date', parse_dates = ['date'])

def trends():
    data = pd.read_csv(SRC, index_col = 'date', parse_dates = ['date'])
    features = ['daily','state']
    data = data[features]
    data_Malaysia = data[data['state'] == 'Malaysia']

    plt.rcParams["figure.figsize"] = [16,9]
    plt.rcParams["figure.autolayout"] = True

    data_Malaysia_yrly = data_Malaysia.resample('YE').sum()
    data_Malaysia_yrly.drop(['state'], axis = 1)
    plt.title('Blood Donations Over the Years (2006-2024, YTD 2024)')
    plt.xlabel('Years')
    plt.ylabel('Blood Donations')
    sb.lineplot(data=data_Malaysia_yrly)
    plt.savefig('output/years_donations.png')
    plt.close()

def state_donate():
    data = pd.read_csv(SRC, index_col = 'date', parse_dates = ['date'])
    data_states = data[data['state'] != 'Malaysia']
    data_states = data_states.groupby(['state']).sum().reset_index()

    plt.title('Total Blood Donations for Each States since 2006')
    plt.xlabel('State')
    plt.ylabel('Blood Donations')
    sb.barplot(data=data_states, x='state', y='daily')
    plt.savefig('output/total_donations_states.png')
    plt.close()

def latest_trend():
    data = pd.read_csv(SRC, index_col = 'date', parse_dates = ['date'])
    data_Malaysia = data[data['state'] == 'Malaysia']
    month_data = data_Malaysia.iloc[-30:]
    month_data.tail()

    plt.figure(figsize=(16,8))
    plt.title('30-Day Trend Analysis: Exploring Short-Term Patterns in Blood Donations in Malaysia')
    plt.xlabel('Date')
    plt.ylabel('Number of Donations')
    plt.xticks(rotation = 90)
    sb.lineplot(data=month_data, x='date', y='daily')
    sb.set_style("whitegrid")
    plt.savefig('output/blood-donations-MY-trending.png')
    plt.close()

trends()
state_donate()
latest_trend()