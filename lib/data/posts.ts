import { Post } from "../types";

export const posts: Post[] = [
  {
    id: "p1",
    authorId: "1",
    content:
      "Just shipped a major performance improvement at Vercel — cold starts for serverless functions are now 50% faster. This was a 6-month effort involving deep changes to our runtime architecture.\n\nThe key insight: most of the cold start time was spent in module resolution, not execution. By pre-computing the dependency graph at build time, we eliminated most of that overhead.\n\nProud of the team for pushing through the hard parts. 🚀",
    likes: 847,
    comments: 92,
    reposts: 156,
    imageUrl: "https://picsum.photos/seed/p1/800/400",
    createdAt: "2025-12-15T10:30:00Z",
  },
  {
    id: "p2",
    authorId: "2",
    content:
      "Hot take: The best code review is the one that never needs to happen.\n\nInvest in:\n→ Strong typing\n→ Automated linting\n→ Comprehensive tests\n→ Clear architecture docs\n\nCode review should focus on design decisions and knowledge sharing, not catching bugs. That's what machines are for.",
    likes: 1203,
    comments: 234,
    reposts: 312,
    createdAt: "2025-12-14T15:45:00Z",
  },
  {
    id: "p3",
    authorId: "3",
    content:
      "CSS has evolved so much in the past 2 years that most \"CSS-in-JS is better\" arguments are outdated.\n\nNative CSS now has:\n• Container queries\n• :has() selector\n• Nesting\n• @scope\n• Anchor positioning\n• View transitions\n\nThe platform is incredible. Give it another look.",
    likes: 2156,
    comments: 378,
    reposts: 524,
    imageUrl: "https://picsum.photos/seed/p3/800/400",
    createdAt: "2025-12-13T09:15:00Z",
  },
  {
    id: "p4",
    authorId: "4",
    content:
      "After 4 years building CloudSync, we were acquired by Datadog last year. Now I'm starting something new.\n\nAnnouncing DevStack — an AI-powered developer platform that helps engineering teams ship faster without sacrificing quality.\n\nWe just closed our seed round and joined YC W24. Hiring across the board.\n\nIf you want to build the future of developer tools, DM me.",
    likes: 3421,
    comments: 456,
    reposts: 789,
    createdAt: "2025-12-12T14:00:00Z",
  },
  {
    id: "p5",
    authorId: "5",
    content:
      "Published a new paper on efficient fine-tuning of large language models. TLDR: you can get 95% of full fine-tuning performance with 0.1% of trainable parameters if you choose the right layers.\n\nLink in comments. Happy to answer questions.",
    likes: 956,
    comments: 178,
    reposts: 234,
    createdAt: "2025-12-11T11:20:00Z",
  },
  {
    id: "p6",
    authorId: "6",
    content:
      "We just open-sourced our edge caching library at Cloudflare. It handles 10M+ requests/sec with p99 latency under 5ms.\n\nThe architecture is surprisingly simple:\n1. Consistent hashing for key distribution\n2. Two-tier cache (hot/warm) with probabilistic refresh\n3. Circuit breaker for origin protection\n\nCheck it out on GitHub and let us know what you think.",
    likes: 1567,
    comments: 201,
    reposts: 345,
    imageUrl: "https://picsum.photos/seed/p6/800/400",
    createdAt: "2025-12-10T16:30:00Z",
  },
  {
    id: "p7",
    authorId: "7",
    content:
      "Managing engineers ≠ managing code.\n\nThe hardest part of becoming an engineering manager isn't the technical decisions — it's learning that your success is now measured by your team's output, not yours.\n\nThree things I wish I knew earlier:\n1. 1:1s are your most important meeting\n2. Context-setting > problem-solving\n3. Your job is to make yourself unnecessary",
    likes: 2890,
    comments: 345,
    reposts: 567,
    createdAt: "2025-12-09T08:45:00Z",
  },
  {
    id: "p8",
    authorId: "1",
    content:
      "Hiring tip: The best engineering interviews test for how someone thinks, not what they've memorized.\n\nWe stopped asking LeetCode questions 2 years ago. Instead, we do:\n• System design with real problems from our codebase\n• Pair programming on an actual feature\n• Architecture review of their past work\n\nOur offer acceptance rate went from 60% to 89%.",
    likes: 4123,
    comments: 567,
    reposts: 890,
    createdAt: "2025-12-08T13:10:00Z",
  },
  {
    id: "p9",
    authorId: "3",
    content:
      "Just wrapped up my talk at CSS Day about the future of design engineering.\n\nKey takeaway: The role of design engineer will become one of the most important in tech. As AI handles more commodity code, the differentiator becomes taste, interaction quality, and pixel-perfect execution.\n\nSlides are up on my website if you're interested.",
    likes: 1789,
    comments: 234,
    reposts: 412,
    imageUrl: "https://picsum.photos/seed/p9/800/400",
    createdAt: "2025-12-07T10:00:00Z",
  },
  {
    id: "p10",
    authorId: "5",
    content:
      "Common misconception: \"You need a huge dataset to fine-tune an LLM.\"\n\nReality: With the right techniques, 500 high-quality examples can outperform 50,000 noisy ones.\n\nQuality > quantity. Always. This applies to data just as much as it applies to code.",
    likes: 2345,
    comments: 289,
    reposts: 456,
    createdAt: "2025-12-06T14:30:00Z",
  },
  {
    id: "p11",
    authorId: "2",
    content:
      "Just shipped real-time multiplayer cursors in Linear. The technical challenge was fascinating — synchronizing cursor positions across clients with sub-50ms latency.\n\nWe ended up using CRDTs for conflict resolution and a custom WebSocket protocol optimized for high-frequency position updates.\n\nTry it out and let me know what you think!",
    likes: 1890,
    comments: 267,
    reposts: 378,
    createdAt: "2025-12-05T09:20:00Z",
  },
  {
    id: "p12",
    authorId: "4",
    content:
      "Startup advice nobody gives you:\n\nThe first version of your product should be embarrassing. Not because quality doesn't matter, but because the fastest way to learn what matters is to ship something real and watch what happens.\n\nPerfection is the enemy of product-market fit.",
    likes: 5678,
    comments: 789,
    reposts: 1234,
    imageUrl: "https://picsum.photos/seed/p12/800/400",
    createdAt: "2025-12-04T12:00:00Z",
  },
  {
    id: "p13",
    authorId: "6",
    content:
      "Performance tip: If your API response times are inconsistent, check your garbage collector.\n\nWe reduced p99 latency from 200ms to 12ms by switching from Go's default GC to a manual memory management approach for our hot path.\n\nSometimes the biggest wins come from the most boring optimizations.",
    likes: 1234,
    comments: 156,
    reposts: 289,
    createdAt: "2025-12-03T15:45:00Z",
  },
  {
    id: "p14",
    authorId: "7",
    content:
      "Excited to share that the women-in-tech meetup I organize just hit 5,000 members! 🎉\n\nWhat started as 12 people in a coffee shop is now the largest community of its kind in the Bay Area. We run monthly workshops, mentorship programs, and an annual conference.\n\nIf you're interested in joining or speaking, the link is in my profile.",
    likes: 3456,
    comments: 423,
    reposts: 678,
    createdAt: "2025-12-02T11:30:00Z",
  },
];
