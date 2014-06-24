// Utility functions for use throughout

// Nice Numbers
function nn(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// Calculates the amount to increase toward a maximum value.
// If currentValue + increaseBy <= maxValue, returns increaseBy.
// Otherwise, returns maxValue - currentValue
// If a negative number would be returned, we return 0 instead.
function grow_to_max(currentValue, maxValue, increaseBy) {
  return Math.max(0, Math.min(maxValue - currentValue, increaseBy));
}

// Calculates the amount to decrease toward a minimum value.
// If currentValue - decreaseBy >= minValue, returns decreaseBy.
// Otherwise, returns minValue - currentValue
// If a positive number would be returned, we return 0 instead.
function shrink_to_min(currentValue, minValue, decreaseBy) {
  return Math.min(0, Math.max(minValue - currentValue, decreaseBy));
}