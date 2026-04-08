function getFeedbackStats(feedbackData) {
    // Analyze autotune feedback data
    const totalFeedback = feedbackData.length;
    const positiveFeedback = feedbackData.filter(f => f.type === 'positive').length;
    const negativeFeedback = feedbackData.filter(f => f.type === 'negative').length;

    return {
        totalFeedback,
        positiveFeedback,
        negativeFeedback,
        positivePercentage: (positiveFeedback / totalFeedback) * 100,
        negativePercentage: (negativeFeedback / totalFeedback) * 100,
    };
}

export default getFeedbackStats;