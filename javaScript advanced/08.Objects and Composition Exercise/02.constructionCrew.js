function constructionCrew(worker) {
  if (worker.dizziness) {
    return {
      ...worker,
      levelOfHydrated: worker.weight * 0.1 * worker.experience,
      dizziness: false,
    };
  }

  return { ...worker };
}
console.log(constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
