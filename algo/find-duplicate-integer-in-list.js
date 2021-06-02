function findRepeat(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {
    let midpoint = floor + parseInt((ceiling - floor) / 2);

    let [lower_range_floor, lower_rance_ceiling] = [floor, midpoint];
    let [upper_range_floor, upper_rance_ceiling] = [midpoint + 1, ceiling];

    let items_in_lower_range = 0;

    for (const number in numbers) {
      if (lower_range_floor <= number && number <= lower_rance_ceiling) {
        items_in_lower_range++;
      }
    }

    const distinct_possible_intgers_in_lower_range =
      lower_rance_ceiling - lower_range_floor + 1;

    if (items_in_lower_range > distinct_possible_intgers_in_lower_range) {
      [floor, ceiling] = [lower_range_floor, lower_rance_ceiling];
    } else {
      [floor, ceiling] = [upper_range_floor, upper_rance_ceiling];
    }
  }

  return floor;
}
