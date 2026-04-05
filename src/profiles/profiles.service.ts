import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: '09263fdd-f702-4075-9df6-e4bf5642509e',
      name: 'Kai',
      description:
        "This JavaScript coder is a master of syntax, a weaver of the web, and a connoisseur of coffee. In the morning, I like to make a wheatgrass juice and set aside an hour to read up on the latest JS releases before starting my day. There's just something electric about a fresh npm install, you know? Want to contribute to a new universe together?",
    },
    {
      id: 'a39950ae-2e14-4500-8ab6-1a6c86f786d0',
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`,
    },
    {
      id: '21617c03-de24-463d-89c4-29fd90a22773',
      name: 'Arjun',
      description:
        'Python developer passionate about data pipelines, clean abstractions, and automation that actually saves time. My mornings start with black coffee and a quick glance at logs, followed by refining scripts until they feel effortless. I value clarity over cleverness—want to turn complexity into something elegant?',
    },
    {
      id: '80c2acb5-ac9d-4a0b-95af-26c5ec8e94a4',
      name: 'Elena',
      description:
        'Frontend engineer who lives for intuitive UX, smooth animations, and pixel-perfect layouts. I begin the day with design inspiration and a checklist of micro-interactions to refine. Accessibility and performance are non-negotiable—ready to craft interfaces users actually enjoy?',
    },
    {
      id: 'f797f60d-ebf2-4b70-a128-4a9b23925a1d',
      name: 'Marcus',
      description:
        'DevOps engineer focused on reliability, observability, and infrastructure that scales without surprises. My routine includes monitoring dashboards, tuning pipelines, and eliminating single points of failure. If it isn’t automated, it’s a risk—shall we make deployment boring in the best way?',
    },
    {
      id: '8fb0da9c-dfc7-4072-b948-798fdef20f45',
      name: 'Sofia',
      description:
        'Mobile developer who enjoys building fast, polished apps with seamless user experiences. I start with a design review, then dive into performance tuning and edge-case handling. Battery efficiency and responsiveness matter—interested in shipping something users keep on their home screen?',
    },
    {
      id: '9ca5981f-eb60-43c0-af33-e3ab7188b85d',
      name: 'Liam',
      description:
        'Go developer drawn to simplicity, concurrency, and systems that just work under pressure. My day kicks off with metrics review and a focus on reducing latency wherever possible. Minimalism wins over complexity—want to build something fast and dependable?',
    },
    {
      id: 'ab0b8411-b8de-4b8e-ae0e-b54ceeece3c3',
      name: 'Nina',
      description:
        'Security engineer who thinks in threat models, attack surfaces, and defensive design. I start by reviewing alerts and staying current on vulnerabilities, then harden systems before problems arise. Trust is built through diligence—shall we make something truly secure?',
    },
    {
      id: '2af34ee0-6e94-492c-b570-5cd9b612a04c',
      name: 'Diego',
      description:
        'Full-stack developer who enjoys bridging backend logic with seamless frontend experiences. My workflow revolves around shipping features end-to-end without losing sight of performance. Clean integration is everything—interested in building something cohesive?',
    },
    {
      id: '5d10c608-96d1-444d-b49a-5da162426bd4',
      name: 'Yuki',
      description:
        'AI engineer focused on practical machine learning, model efficiency, and real-world impact. My mornings include reviewing experiment results and tuning models for better accuracy and speed. If it doesn’t deliver value, it’s just noise—want to build something intelligent and useful?',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const findProfile = this.profiles.find((profile) => profile.id === id);
    if (!findProfile) {
      throw new NotFoundException(`Profile with ID '${id}' not found.`);
    }
    return findProfile;
  }

  create(createProfileDto: CreateProfileDto) {
    const createProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(createProfile);
    return createProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const profile = this.profiles.find((profile) => profile.id === id);
    if (!profile) {
      throw new NotFoundException(`Profile with ID '${id}' not found.`);
    }
    profile.name = updateProfileDto.name;
    profile.description = updateProfileDto.description;
    return profile;
  }

  delete(id: string): void {
    const indexProfile = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (indexProfile === -1) {
      throw new NotFoundException(`Profile with ID '${id}' not found.`);
    }
    this.profiles.splice(indexProfile, 1);
  }
}
