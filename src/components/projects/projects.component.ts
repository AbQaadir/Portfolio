import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  videoUrl?: string;
  githubUrls: { name?: string; url: string }[];
  liveUrl?: string;
  demoUrl?: string;
}

interface OtherProject {
  title: string;
  description: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Ballerina Central AI Mode',
      description: 'An AI-powered chat interface for Ballerina Central, allowing users to get information about packages, code snippets, and documentation. Implemented using a Gemini-powered MCP server without RAG.',
      tech: ['Ballerina', 'Gemini Connector (Ballerina)', 'MCP Server (Ballerina)', 'Choreo', 'React', 'MCP Client (Ballerina)', 'Bijira', 'TypeScript'],
      imageUrl: 'https://github.com/AbQaadir/central-chat-app-frontend/blob/main/openai.png?raw=true',
      githubUrls: [
        { name: 'Frontend', url: 'https://github.com/AbQaadir/central-chat-app-frontend' },
        { name: 'Gemini Powered MCP Client in Ballerina', url: 'https://github.com/AbQaadir/ballerina-mcp-client-with-gemini' },
        { name: 'MCP Server in Ballerina', url: 'https://github.com/AbQaadir/ballerina-mcp-server-as-service' },
      ],
      demoUrl: 'https://drive.google.com/file/d/19DKHcLbWPylLvu_BmufW6I74PawIdU3C/view?usp=sharing'
    },
    {
      title: 'MCP Powered Applicant Tracking System',
      description: 'A comprehensive full-stack application that combines resume processing, semantic search, and AI-powered chat capabilities. Built with modern microservices architecture.',
      tech: ['Python', 'Gemini', 'FastMCP', 'FastAPI', 'Docker', 'PgAdmin', 'Redis', 'Next.js', 'LangChain', 'Celery'],
      imageUrl: 'https://github.com/AbQaadir/mcp-chat-bot/blob/main/resume.png?raw=true',
      githubUrls: [
        {name: 'Gemini powered python MCP Client', url: 'https://github.com/AbQaadir/mcp-chat-bot/tree/main/fastapi-server' },
        {name: 'MCP server (FastMCP)', url: 'https://github.com/AbQaadir/mcp-chat-bot/tree/main/fastmcp-server'},
        {name: 'Frontend', url: 'https://github.com/AbQaadir/mcp-chat-bot/tree/main/next-frontend'}
      ],
      demoUrl: 'https://drive.google.com/file/d/151rmTgduQ3SXGfIy7MQtwfroa8nsChiP/view?usp=sharing'
    },
    {
      title: 'ER Diagram Generator',
      description: 'Developed an AI-powered application that translates natural language prompts into interactive and exportable ER diagrams.',
      tech: ['React', 'TypeScript', 'ReactFlow', 'Gemini'],
      imageUrl : "https://github.com/AbQaadir/er-diagram-generator/blob/main/images/image.png?raw=true",
      githubUrls: [{ name:'Web App', url: 'https://github.com/AbQaadir/er-diagram-generator' }]
    },
  ];

  otherProjects: OtherProject[] = [
    {
      title: 'Data Structures & Algorithms',
      description: 'A complete data structure and algorithm course developed in C.',
      githubUrl: 'https://github.com/AbQaadir/Data-Structure'
    },
    {
      title: 'MLOps Application for Kidney Image Classification',
      description: 'Developed a Kidney Image Classification application with a robust MLOps pipeline.',
      githubUrl: 'https://github.com/AbQaadir/Kidney-Disease-Classification'
    },
    {
      title: 'Prompt Engineering Techniques',
      description: 'A comprehensive collection of OpenAI prompt engineering techniques and examples.',
      githubUrl: 'https://github.com/AbQaadir/prompt-engineering'
    },
    {
      title: 'Natural Language Processing',
      description: 'Comprehensive study materials and implementations for Natural Language Processing concepts.',
      githubUrl: 'https://github.com/AbQaadir/NLP'
    },
    {
      title: 'Java-Microservice Architecture Application',
      description: 'Developed a scalable backend for a real estate application using a microservice architecture.',
      githubUrl: 'https://github.com/AbQaadir/Microservice-Architecture-Spring-Boot'
    },
    {
      title: 'Java-Monolithic Architecture Application',
      description: 'A monolithic architecture application built with Spring Boot and Java.',
      githubUrl: 'https://github.com/AbQaadir/Monolithic-Architecture-Spring-Boot'
    },
    {
      title: 'PHP-MVC Architecture Application',
      description: 'Complete e-commerce application backend using PHP following the MVC design pattern.',
      githubUrl: 'https://github.com/AbQaadir/e-commerce-php-backend'
    },
    {
      title: 'Ballerina Language Code Evaluation Agent',
      description: 'Developed a scalable self-evaluation workflow using LangGraph to automate assignment assessments.',
      githubUrl: 'https://github.com/AbQaadir/Assignment-Analyzer'
    },
    {
      title: 'Ballerina Language Code Completion Chatbot',
      description: 'Developed a chatbot for Ballerina code completion using Retrieval Augmented Generation (RAG).',
      githubUrl: 'https://github.com/AbQaadir/ballerina-doc-assistant'
    },
    {
      title: 'Resume Analyzer for ATS',
      description: 'Developed a resume analysis tool that automates the extraction of candidate information.',
      githubUrl: 'https://github.com/AbQaadir/ats-resume-analyzer'
    },
    {
      title: 'MVP GenAI Projects',
      description: 'A collection of Generative AI projects using Hugging Face models.',
      githubUrl: 'https://github.com/AbQaadir/genai-projects'
    },
    {
      title: 'IPL 2024 Prediction',
      description: 'A competition project to predict the IPL 2024 winning team.',
      githubUrl: 'https://github.com/AbQaadir/IPL2024'
    }
  ];
}