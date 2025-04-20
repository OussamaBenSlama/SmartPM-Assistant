# %%
from crewai import Agent, LLM ,Task 
import os
from dotenv import load_dotenv

load_dotenv()

# %%
my_llm = LLM(
    model='gemini/gemini-1.5-flash',
    api_key=os.getenv('GOOGLE_API_KEY')
)


# %%
kpi_analyzer = Agent(
    name="Manufacturing KPI Analyzer",
    description="AI analyst specializing in production efficiency, quality control, and operational optimization for manufacturing.",
    llm=my_llm,
    role="Manufacturing Operations Analyst",
    goal="Deliver actionable insights from KPI data to enhance production efficiency, quality, and safety.",
    backstory="""
    You are an AI assistant supporting manufacturing managers and plant supervisors. With deep expertise in production metrics, equipment performance, and industrial operations, you translate raw data into insights that drive continuous improvement. Your strength lies in multi-dimensional performance analysis and highlighting areas for optimization.
    """,
    instructions="""
    You are a manufacturing analytics expert. When provided with a CSV containing production metrics:

    - Compare shift-by-shift performance and highlight key differences.
    - Calculate Overall Equipment Effectiveness (OEE) using output and machine utilization.
    - Analyze the correlation between WorkerCount, ProductionOutput, and EnergyConsumption_kWh.
    - Compare weekly performance trends.
    - Identify and prioritize issues based on their impact on efficiency, quality, and safety.
    - Format findings using markdown with clear bullet points and relevant subheadings.
    - Recommend specific KPIs that require closer monitoring based on the data.
    
    Present your findings directly—no introductions or filler phrases. Focus on clarity, actionability, and executive readability.
    """,
    markdown=True,
    verbose=True,
)

kpi_task = Task(
    description="""
    Based on the provided CSV data, analyze the following dimensions:

    Your task:
    - Extract key insights and trends across all dimensions.
    - Use bullet points with markdown formatting.
    - Include any correlations, patterns, and anomalies observed.
    - Avoid introductions and unnecessary phrasing.
    """,
    agent=kpi_analyzer,
    expected_output="A concise markdown report with bullet-point insights on shift performance, OEE, quality control, energy efficiency, safety, and prioritized recommendations."
)


# %%
chatbot_agent = Agent(
    name="Manufacturing KPI Chatbot",
    llm=my_llm,
    role="Manufacturing Operations chatbot",
    goal="Assist managers by responding to natural language questions about production KPIs.",
    backstory="You are an AI chatbot designed to assist manufacturing managers by answering questions about production KPIs using CSV data.",
    description="An AI chatbot that can answer natural language questions about production KPIs using CSV data.",
    instructions="""
    1. Understand the user's question.
    2- analyse the given CSV data to extract relevant information.
    3. Provide a clear,human-readable answer and concise answer based on the analysis.
    4- your response should be short and to the point without introduction and unnecessary phrases (max of 100 words).
    """,
    verbose=True,
)

chatbot_task = Task(
    description="""
    Based on the provided CSV data and the user's question, provide a clear, human-readable answer and concise answer based on the analysis. in max 100 words without introduction or unnecessary phrasing.
    """,
    agent=chatbot_agent,
    expected_output="A clear, human-readable answer to the user's question based on the analysis of the CSV data. in max 100 words without introduction or unnecessary phrasing.",
)


# %%
risk_detector = Agent(
    name="Manufacturing Risk Detector",
    llm=my_llm,
    role="Manufacturing Risk Detector",
    goal="Identify critical manufacturing risks through data analysis",
    backstory="""
    You are an AI assistant that specializes in identifying potential risks in manufacturing processes by analyzing production metrics and safety data. Your expertise lies in detecting anomalies, efficiency drops, and safety concerns before they become significant problems.
    """,
    description="Expert system for detecting manufacturing risks through production data analysis",
    instructions="""
    When analyzing manufacturing data:
    
    1. Identify concerning trends in key metrics (production output, downtime, defect rates)
    2. Flag any safety incidents and correlate with other metrics
    3. Detect efficiency problems by analyzing machine utilization and energy consumption
    4. Prioritize risks based on severity and potential impact
    5. Present findings as concise bullet points with markdown formatting
    
    Focus on actionable insights without introductory text or filler content.
    """,
    verbose=True,
    markdown=True,
)

risk_task = Task(
    description="Analyze the manufacturing data (Date, Shift, ProductionOutput, DowntimeMinutes, DefectRate, EnergyConsumption_kWh, WorkerCount, MachineUtilizationPercent, SafetyIncidents) to identify key operational risks.",
    expected_output="A prioritized list of detected manufacturing risks with supporting data points in bullet point format using markdown syntax.",
    agent=risk_detector,
    markdown=True,
)

# %%
recommender = Agent(
    name="Manufacturing Action Recommender",
    description="Strategic action recommender for manufacturing optimization",
    llm=my_llm,
    role="Optimization Specialist",
    goal="Provide targeted, actionable recommendations to address manufacturing risks and improve KPIs",
    backstory="""
    You are an experienced manufacturing optimization specialist with expertise in translating risk assessments and KPI analyses into practical, implementable actions. Your recommendations balance immediate fixes with long-term improvements, considering resource constraints and implementation feasibility.
    """,
    instructions="""
    When presented with manufacturing risk analysis:
    
    1. Prioritize recommendations based on risk severity and operational impact
    2. Provide specific, actionable steps rather than general advice
    3. Include both immediate interventions and preventative measures
    4. Consider resource requirements and implementation complexity
    5. Connect recommendations directly to improving specific KPIs (production output, downtime, defect rates, safety)
    
    Format recommendations as concise bullet points with clear, direct language.
    """,
    verbose=True,
    markdown=True,
)

recommendation_task = Task(
    description="""
    Based on the provided manufacturing risk analysis that covers production metrics, downtime patterns, defect rates, energy consumption, worker allocation, machine utilization, and safety incidents, recommend specific actions to mitigate identified risks and improve operational performance.
    """,
    expected_output="A prioritized list of specific, actionable recommendations to address manufacturing risks in bullet point format using markdown syntax.",
    agent=recommender,
    markdown=True,
)

# %%
import csv
import os


def get_KPI_insights(csv_data):
    
    kp_analysis_result = kpi_analyzer.execute_task(
        task=kpi_task,  
        context={"user_data": csv_data}
    )
    print(kp_analysis_result)
    return kp_analysis_result



# %%
def talk_to_chatbot(question,csv_data):
    
    chatbot_response = chatbot_agent.execute_task(
        task=chatbot_task,
        context={"user_data": csv_data, "question": question}
    )
    print(chatbot_response)
    return chatbot_response



# %%
def detect_risks(csv_data):
    
    risk_list = risk_detector.execute_task(
        task=risk_task,
        context={"user_data": csv_data}
    )
    print(risk_list)
    return risk_list



# %%
def get_recommendation(csv_data):
    
    risk_list = risk_detector.execute_task(
        task=risk_task,
        context={"user_data": csv_data}
    )
    recommendation_list = recommender.execute_task(
        task=recommendation_task,
        context={"user_data": csv_data, "risk_analysis": risk_list}
    )
    print(recommendation_list)
    return recommendation_list




