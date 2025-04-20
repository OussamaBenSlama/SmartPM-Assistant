# SmartPM Assistant

## Overview
**SmartPM Assistant** is an AI-powered assistant designed specifically for manufacturing project managers. It provides real-time KPI insights, risk predictions, and intelligent recommendations through a user-friendly dashboard and a natural language chatbot interface—empowering decision-makers to manage complex operations with speed and clarity.

---

## ❓ Why This Project?

Manufacturing project managers face challenges such as:

- ⏱️ Wasting hours on manual report reviews and dashboard navigation  
- 🚨 Missing real-time risk alerts, leading to reactive decisions  
- 📊 Struggling to make fast decisions due to scattered and siloed data  
- 🤯 Having little to no support for interpreting KPI trends or predicting future issues  

**SmartPM Assistant** was created to solve these pain points by bringing together AI-driven insights, conversational analytics, and proactive decision support in one seamless platform.

---

## ✨ Main Features

- 📊 **Smart KPI Reporting**  
  Automatically generate daily, weekly, or on-demand performance summaries.

- 🔍 **Risk Prediction Engine**  
  Detect risks like production delays, bottlenecks, or resource shortages in advance.

- 💬 **AI Chat Interface**  
  Ask questions like “What’s the risk for this week?” and get clear, data-backed answers.

- 🧠 **Contextual Recommendations**  
  Get proactive suggestions on how to solve or prevent issues before they escalate.

- 🌐 **Web Interface for Professionals to:**  
  - View summarized reports  
  - Communicate with the chatbot  
  - Receive risk alerts and recommendations

---

## 🧱 System Components & Architecture

### 🔧 Functional Architecture

- **User Interface:** Nextjs + Tailwind CSS dashboard  
- **AI Interaction:** Natural Language Chatbot  
- **Insights Engine:** Risk Detection & KPI Analysis  
- **Backend API:** Manages data, project status, and insights  

### 🛠️ Technical Architecture

This project follows a modular architecture that separates responsibilities between the frontend, backend, and AI layers to ensure scalability and maintainability.

#### 🖥️ Frontend

- **Framework:** Next.js  
- **Styling:** Tailwind CSS  
- **Functionality:**  
  - Interactive dashboard to display real-time KPIs and risk alerts  
  - Chat interface for natural language interaction with the AI assistant  
  - Responsive design for desktop and tablet access  
  - API integration with backend and AI services  

#### 🔧 Backend

- **Framework:** Flask (Python)  
- **Responsibilities:**  
  - Manages communication with the AI engine and database  
  - Generates and serves reports and alerts based on data inputs  
  - RESTful API for frontend interaction  

#### 🤖 AI/ML Layer

- **AI Agent Framework:** Crewai  
  - Orchestrates AI tasks and decision-making workflows  
  - Handles context-aware responses, memory, and tool usage  
- **Language Model API:** Gemini API (from Google)  
  - Powers the chatbot interface with advanced natural language understanding  
  - Extracts insights from structured and unstructured data  
---

## 🧪 Proof of Concept / Demo

The proof of concept demonstrates:

- ✅ Chat with the assistant: Ask questions about KPI performance and receive insightful answers  
- 📊 Auto-generated reports: 
  - Key insights from KPIs  
  - Risk detection summaries  
  - Actionable recommendations based on data analysis


> Demo : <a href="https://drive.google.com/file/d/1Bn3TiGgd4VeHQ8-T1aRTLTBUtf8Pu8CT/view?usp=sharing">Click Here</a>

---

## 📈 Expected Impact & Benefits

- ⏱️ faster project analysis with automated reports  
- 🔍 Early risk detection = fewer deadline slips and production halts  
- 📋 Managers can focus on decisions, not data crunching  
- 🤖 Helps non-technical staff interact with technical data via simple chat  

---

## ⚠️ Potential Challenges

- 🧹 Data quality and consistency affect prediction accuracy  
- 🧑‍🏫 User onboarding and AI trust building  
- 🔌 Integration with legacy manufacturing systems  
