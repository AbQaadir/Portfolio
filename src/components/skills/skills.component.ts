import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  iconUrl: string;
  needsInvert?: boolean;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .invert-on-dark {
      filter: invert(1) brightness(1.5);
    }
    img[src$=".svg"] {
      filter: brightness(0) invert(1);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skillCategories = signal<SkillCategory[]>([
    {
      name: 'Languages',
      skills: [
        { name: 'Python', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png' },
        { name: 'Java', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png' },
        { name: 'JavaScript', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png' },
        { name: 'TypeScript', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png' },
        { name: 'HTML', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png' },
        { name: 'CSS', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png' },
        { name: 'C', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c.png' },
        { name: 'C++', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png' },
        { name: 'R', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
        { name: 'PHP', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php.png' },
        { name: 'Go', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/go.png' },
        { name: 'Ballerina', iconUrl: 'https://ballerina.io/img/ballerina-logo.svg', needsInvert: true },
      ],
    },
    {
      name: 'Frameworks',
      skills: [
        { name: 'PyTorch', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'QisKit', iconUrl: 'https://avatars.githubusercontent.com/u/30696987?s=48&v=4' },
        { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Flask', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'LangGraph', iconUrl: 'https://avatars.githubusercontent.com/u/126733545?s=48&v=4' },
        { name: 'Scikit-learn', iconUrl: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png', needsInvert: true },
        { name: 'LangChain', iconUrl: 'https://avatars.githubusercontent.com/u/126733545?s=48&v=4' },
        { name: 'Pandas', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'CrewAI', iconUrl: 'https://avatars.githubusercontent.com/u/170677839?s=48&v=4' },
        { name: 'PySpark', iconUrl: 'https://avatars.githubusercontent.com/u/47359?s=48&v=4' },
        { name: 'Matplotlib', iconUrl: 'https://matplotlib.org/_static/images/logo2.svg', needsInvert: true },
        { name: 'NumPy', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'NLTK', iconUrl: 'https://avatars.githubusercontent.com/u/124114?s=48&v=4' },
        { name: 'OpenCV', iconUrl: 'https://opencv.org/wp-content/uploads/2020/07/cropped-OpenCV_logo_white_600x.png' },
        { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'PostgreSQL', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png' },
        { name: 'MongoDB', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png' },
        { name: 'Neo4j', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
        { name: 'PgVector', iconUrl: 'https://avatars.githubusercontent.com/u/123674523?s=200&v=4' },
        { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      ]
    },
    {
      name: 'Cloud',
      skills: [
        { name: 'AWS', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'Azure', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Choreo', iconUrl: 'https://wso2.cachefly.net/wso2/sites/all/image_resources/wso2-branding-logos/choreo-by-wso2.svg', needsInvert: true },
        { name: 'Docker', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png' },
        { name: 'Kubernetes', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png' },
        { name: 'RabbitMQ', iconUrl: 'https://cdn.worldvectorlogo.com/logos/rabbitmq.svg' },
        { name: 'Kafka', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
        { name: 'Celery', iconUrl: 'https://avatars.githubusercontent.com/u/375646?s=200&v=4' },
      ]
    },
    {
      name: 'CI/CD',
      skills: [
        { name: 'Git', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png' },
        { name: 'GitHub', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png' },
        { name: 'Jenkins', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jenkins.png' },
        { name: 'GitHub Actions', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
        { name: 'MLflow', iconUrl: 'https://www.mlflow.org/docs/2.1.1/_static/MLflow-logo-final-black.png', needsInvert: true },
        { name: 'DVC', iconUrl: 'https://dvc.org/img/logos/dvc.svg', needsInvert: true },
        { name: 'Hugging Face', iconUrl: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', needsInvert: true },
      ]
    },
    {
      name: 'APIs',
      skills: [
        { name: 'REST', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png' },
        { name: 'GraphQL', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png' },
        { name: 'gRPC', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grpc.png' },
        { name: 'HTTP', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/http.png' },
        { name: 'WebSocket', iconUrl: 'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/websocket.png' },
      ]
    }
  ]);

  selectedCategoryIndex = signal(0);

  selectCategory(index: number): void {
    this.selectedCategoryIndex.set(index);
  }
}
