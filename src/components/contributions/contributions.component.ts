import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  url: string;
}

interface Contribution {
  title: string;
  platform: string;
  url: string;
  points: string[];
  role?: string;
  year?: string;
}

interface ContributionCategory {
  name: string;
  items: BlogPost[] | Contribution[];
}

@Component({
  selector: 'app-contributions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contributions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributionsComponent {
  isBlog(item: any): item is BlogPost {
    return 'readTime' in item;
  }

  isContribution(item: any): item is Contribution {
    return 'platform' in item;
  }

  categories = signal<ContributionCategory[]>([
    {
      name: 'Blog',
      items: [
        {
          title: 'From Natural Language to Precise Diagrams',
          date: 'June 22, 2023',
          readTime: '10 min read',
          description: 'How to transform natural language requirements into precise technical diagrams for better communication in software development projects.',
          tags: ['Software Engineering', 'Documentation', 'UML'],
          url: 'https://www.notion.so/From-Natural-Language-to-Precise-Diagrams-1dfa82978f0d8023abfcefc2b2331d69?pvs=4'
        },
        {
          title: 'Numerical Stability in Machine Learning',
          date: 'May 15, 2023',
          readTime: '8 min read',
          description: 'An exploration of numerical stability issues in machine learning algorithms and how to address them for more reliable model performance.',
          tags: ['Machine Learning', 'Mathematics', 'Optimization'],
          url: 'https://www.notion.so/Numerical-Stability-in-Machine-Learning-1d2a82978f0d80a2b7cbf5ea76f15bdb?pvs=4'
        }
      ]
    },
    {
      name: 'Open Source',
      items: [
        {
          title: 'Multi-Vendor AI Model Support',
          platform: 'Ballerina Platform',
          url: 'https://github.com/ballerina-platform/ballerina-library/issues/8307',
          points: [
            'Contributed to extending OpenAI compatibility by enabling multi-vendor AI model support within Ballerina’s LLM ecosystem.',
            'Enhanced abstraction layers to allow dynamic provider configuration (OpenAI, Anthropic, Gemini, etc.) improving flexibility and developer experience.'
          ]
        },
        {
          title: 'Gemini Connector Creation',
          platform: 'Ballerina Platform',
          url: 'https://github.com/ballerina-platform/ballerina-library/issues/7234',
          points: [
            'Developed a new Gemini Connector for Ballerina Central, enabling seamless integration with Google’s Gemini LLM API.',
            'Implemented connector schema definitions, authentication, and endpoint configurations aligned with Ballerina’s standard connector framework.'
          ]
        },
        {
          title: 'OpenAI Connector',
          platform: 'Ballerina Platform',
          url: 'https://github.com/ballerina-platform/module-ballerinax-openai.chat/pull/18',
          points: [
            'Upgraded the OpenAI Connector from v3.0.2 to v4.0.0.'
          ]
        },
        {
          title: 'Project Contributor',
          platform: 'Omdena (Local Chapter Challenge)',
          role: 'Project Contributor',
          year: '2024',
          url: '#', // No specific URL provided
          points: [
            'Led web scraping initiatives to extract relevant data, ensuring data integrity through meticulous cleaning and validation processes.',
            'Conducted exploratory data analysis (EDA) to uncover trends and insights, driving informed decision-making and project strategies.'
          ]
        }
      ]
    }
  ]);

  selectedCategoryIndex = signal(0);

  selectCategory(index: number): void {
    this.selectedCategoryIndex.set(index);
  }
}