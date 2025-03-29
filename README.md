# JobBlowers_Syrus25

# LINKS

Final YT Demo Video Link - https://www.youtube.com/watch?v=jFWeJsk8u98

Output Documentaion Of Uptiq AI Workbench - https://docs.google.com/document/d/1eV4jCNXxcWAJ3AhP4BEX3is2dvxyL1PSubW7CGG9jiI/edit?usp=sharing

Old Video Link - https://www.youtube.com/watch?v=H3w_uej4Zi8

Challenges We Faced During our time in Uptiq AI WorkBench Doc link - https://docs.google.com/document/d/1Z3XwK1-BHcxPAWj-T-CdJDOwcl7FLI875ZaB0G_BQiQ/edit?tab=t.0

PPT Canva Link - https://www.canva.com/design/DAGi_NEg1uE/S0fNdIHB5BWz4FmBK_WUdA/edit?utm_content=DAGi_NEg1uE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

# Target Audience:
Startups & SMB Owners – Entrepreneurs struggling with financial planning, funding, and investment optimization.

Investors (Angel Investors, VCs, Private Equity Firms) – Individuals and firms seeking data-driven insights into startup financials to make informed investment decisions.

Banks & NBFCs – Financial institutions interested in offering AI-driven loan recommendations to eligible startups.

Financial Analysts & Advisors – Professionals looking for AI-powered tools to assess startup financial health and creditworthiness.

# Problems They Face 
Startups & SMBs:

Struggle with financial planning, fluctuating revenue, and unclear loan terms.
Difficulty finding the right investors and securing funding.
Poor cash flow management and inefficient investment strategies.
Inventory mismanagement and lack of real-time market insights.

Investors:
Lack of financial transparency in startup pitches.
Difficulty assessing risk, cash flow, and growth potential.
Overwhelming number of startups without clear investment insights.

Banks & NBFCs:
Inefficient loan processing and high risk of defaults.
Lack of AI-driven tools to assess startup creditworthiness.

 # Implementation 
# UPTIQ AI Agent - Financial Analysis & Investment Advisor For SMB's

This Finsight AI agent is designed to process financial documents, analyze startup data, match investors, and provide financial insights using UPTIQ AI Workbench. 

We made these Following Subagents
## 1. Doc Reader
Processes financial documents such as income statements, cash flow statements, and balance sheets.

### Implementation:
- 3 Intents, each with their own workflows for Income,Cash Flow and Balance Sheet.
- **Upload & process** PDFs, Excel, or CSV files using document ingestion nodes.
- Extract key financial data via **OCR or text extraction models**.
- Store structured data in **Storage** for later use.
- Output parsed financial data for downstream analysis.

---

## 2. Stock and Inventory Advisor
Provides insights on stock and inventory trends.

### Implementation:
- 1 Intent for Stock and Inventory Advise
- Accepts **inventory levels and stock movement data**.
- Uses **AI forecasting** for demand trends and stock depletion risks.
- Generates **actionable inventory advice** based on industry benchmarks.
- Optionally integrates with third-party market data APIs.

---

##  3. News Alerts
Tracks financial and industry news updates.

### Implementation:
- Uses **web scraping APIs** or integrates with financial news sources (e.g., Bloomberg, Reuters).
- Implements **AI-powered sentiment analysis** to classify news as **positive, negative, or neutral**.
- Sends **real-time alerts** to users via notifications.

---

## 4. Investor Matching
Recommends investors based on startup profiles.

### Implementation:
- Collects **startup details (industry, funding needs, growth stage)**.
- Analyzes **investor profiles, risk appetite, and investment history**.
- Matches startups with **most relevant investors** using a recommendation algorithm.
- Displays a ranked list of potential investors.

---

##  5. Financial Planning and Analysis
This section includes Growth Strategies, Loan & Credit Analysis, and Cash Flow & Investment Management.

### **5.1 Loan & Credit Analysis**
- Assesses **creditworthiness** based on financial documents.
- Compares **loan options** from financial institutions.
- Provides recommendations for the best **loan terms and credit strategies**.

### **5.2 Cash Flow & Investment Management**
- Monitors **cash inflows and outflows** for financial health tracking.
- Suggests **automated investment opportunities** based on cash reserves.
- Generates **cash flow reports and investment forecasts**.

---

## 6. Comparative Analysis for Investors
Compares startups based on financial performance.

### Implementation:
- Collects **financial reports** from different startups.
- Uses **machine learning models** to compare growth rate, profit margins, and cash flow stability.
- Generates **ranking and comparative insights**.
- Displays results in a **visual dashboard**.

---

Nodes we used during creation of these subagents =

1)webcrawler
2)Javascript
3)prompt
4)uplaod document
5)document to image
6) APi Call nod



## Future Scope
- Implement API integrations for external financial data.
- Develop a **dashboard interface** for visual representation.
- Automate decision-making with AI-driven insights.
- We wanted to implement Realtime loan interest rate of business loans stats but were unable to do so cause banks dont provide business loans like that rather its company to company basis after a meeting has been scheduled
- Realtime Investor matchmaking (unable to do so cause crunchbase and traxcn api has a waiting list so we couldnt implement it in 24/hr hackathon)


---

##  Tech Stack
- **Platform:** UPTIQ AI Workbench
- **AI Models:** LLM-based NLP, Machine Learning (financial forecasting)
- **Data Storage:** UPTIQ Storage
- **APIs:** Financial news, Stock market, Banking APIs


