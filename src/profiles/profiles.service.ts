import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Bruno',
      description: `Node.js developer who thrives on async flows, event loops, and late-night debugging sessions. I start the day with strong coffee, skim changelogs, and have strong opinions about package bloat and clean APIs. Nothing beats shipping a fast server and watching logs stay quiet—care to build something scalable together?`,
    },
    {
      id: randomUUID(),
      name: 'Jessica',
      description: `Java developer who loves robust architectures, elegant patterns, and code that stands the test of time. My mornings involve tea, JVM tuning reads, and a firm stance on readable, maintainable code over clever hacks. Give me a solid Spring setup and I’m happy—shall we engineer something resilient?`,
    },
    {
      id: randomUUID(),
      name: 'Arjun',
      description: `Python developer passionate about data pipelines, clean abstractions, and automation that actually saves time. My mornings start with black coffee and a quick glance at logs, followed by refining scripts until they feel effortless. I value clarity over cleverness—want to turn complexity into something elegant?`,
    },
    {
      id: randomUUID(),
      name: 'Elena',
      description: `Frontend engineer who lives for intuitive UX, smooth animations, and pixel-perfect layouts. I begin the day with design inspiration and a checklist of micro-interactions to refine. Accessibility and performance are non-negotiable—ready to craft interfaces users actually enjoy?`,
    },
    {
      id: randomUUID(),
      name: 'Marcus',
      description: `DevOps engineer focused on reliability, observability, and infrastructure that scales without surprises. My routine includes monitoring dashboards, tuning pipelines, and eliminating single points of failure. If it isn’t automated, it’s a risk—shall we make deployment boring in the best way?`,
    },
    {
      id: randomUUID(),
      name: 'Sofia',
      description: `Mobile developer who enjoys building fast, polished apps with seamless user experiences. I start with a design review, then dive into performance tuning and edge-case handling. Battery efficiency and responsiveness matter—interested in shipping something users keep on their home screen?`,
    },
    {
      id: randomUUID(),
      name: 'Liam',
      description: `Go developer drawn to simplicity, concurrency, and systems that just work under pressure. My day kicks off with metrics review and a focus on reducing latency wherever possible. Minimalism wins over complexity—want to build something fast and dependable?`,
    },
    {
      id: randomUUID(),
      name: 'Nina',
      description: `Security engineer who thinks in threat models, attack surfaces, and defensive design. I start by reviewing alerts and staying current on vulnerabilities, then harden systems before problems arise. Trust is built through diligence—shall we make something truly secure?`,
    },
    {
      id: randomUUID(),
      name: 'Diego',
      description: `Full-stack developer who enjoys bridging backend logic with seamless frontend experiences. My workflow revolves around shipping features end-to-end without losing sight of performance. Clean integration is everything—interested in building something cohesive?`,
    },
    {
      id: randomUUID(),
      name: 'Yuki',
      description: `AI engineer focused on practical machine learning, model efficiency, and real-world impact. My mornings include reviewing experiment results and tuning models for better accuracy and speed. If it doesn’t deliver value, it’s just noise—want to build something intelligent and useful?`,
    },
  ];

  findAll() {
    return this.profiles;
  }
}
