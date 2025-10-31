import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Job {
  company: string;
  role: string;
  period: string;
  tasks: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  jobs = signal<Job[]>([
    {
      company: 'WSO2',
      role: 'Software Engineer Intern',
      period: 'Oct 2024 - Mar 2025',
      tasks: [
        'Designed an agentic workflow for resume analysis, integrating GitHub links to enhance candidate evaluation.',
        'Created a chatbot to assist with Ballerina code completion using Retrieval-Augmented Generation (RAG).',
        'Developed a self-evaluation Agentic workflow using LangGraph to automate coding projects evaluation.',
        'Actively participated in AI strategy meetings, contributing ideas to enhance internal systems and workflows.',
      ],
    },
    {
      company: 'Freelancer',
      role: 'AI Engineer',
      period: 'Aug 2024 - Present',
      tasks: [
        'Trained and fine-tuned machine learning and deep learning models for NLP and computer vision tasks using PyTorch and Hugging Face.',
        'Built custom chatbots/agents using LLM frameworks (LangChain, LangGraph, CrewAI) and retrieval-augmented generation pipelines.',
      ],
    },
  ]);

  selectedJobIndex = signal(0);

  selectJob(index: number): void {
    this.selectedJobIndex.set(index);
  }
}
