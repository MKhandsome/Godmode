// Type definitions for the AutoTune parameter tuning system

type AutoTuneParams = {
    learningRate: number;
    batchSize: number;
    numEpochs: number;
};

type AutoTuneResult = {
    bestParams: AutoTuneParams;
    performance: number;
};

type AutoTuneStrategy = {
    name: string;
    description: string;
    getParams: () => AutoTuneParams;
};

const STRATEGY_PROFILES: AutoTuneStrategy[] = [
    {
        name: 'Basic',
        description: 'A basic tuning strategy.',
        getParams: () => ({ learningRate: 0.01, batchSize: 32, numEpochs: 10 }),
    },
    {
        name: 'Advanced',
        description: 'An advanced tuning strategy that explores more hyperparameters.',
        getParams: () => ({ learningRate: 0.001, batchSize: 64, numEpochs: 20 }),
    }
];

const PARAM_META = {
    learningRate: { min: 0.0001, max: 0.1 },
    batchSize: { min: 1, max: 128 },
    numEpochs: { min: 1, max: 100 },
};

function computeAutoTuneParams(strategy: AutoTuneStrategy): AutoTuneParams {
    return strategy.getParams();
}

function getContextLabel(strategy: AutoTuneStrategy): string {
    return `Using strategy: ${strategy.name}`;
}

function getStrategyLabel(strategy: AutoTuneStrategy): string {
    return strategy.name;
}

function getStrategyDescription(strategy: AutoTuneStrategy): string {
    return strategy.description;
}
