import { createCanvas } from "canvas";

// Repos & developers
const repos = [
  "k8s-gh-action-toolkit", "ask-set-context", "k8s-set-context",
  "k8s-bake", "k8s-create-secret", "k8s-deploy",
  "k8s-lint", "setup-helm", "setup-kubectl",
  "aks-create-action", "action-release-workflows"
];

const developers = ["Tom", "Tats", "David", "Suneha", "Tejhan", "Reinier"]; // Add your team

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

// Assign repositories equally
function assignRepos(devs: string[]): Record<string, string[]> {
  const shuffledRepos = shuffleArray(repos);
  const assignments: Record<string, string[]> = {};

  devs.forEach(dev => (assignments[dev] = []));

  shuffledRepos.forEach((repo, index) => {
    assignments[devs[index % devs.length]].push(repo);
  });

  return assignments;
}

// Create a basic console UI
const assignments = assignRepos(developers);
console.log("🎡 Repo Assignments:");
console.table(assignments);
