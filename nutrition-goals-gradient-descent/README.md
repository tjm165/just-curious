# Nutrition Goals Optimizer

Use gradient descent optimization to determine food portions that meet your macro goals. This is an alternative to manual guess-and-check via spreadsheets.

The optimizer finds serving sizes that:
- Hit your calorie target (within a tolerance range)
- Meet minimum protein requirements
- Respect minimum serving constraints for food diversity

## Usage Example (JSON Files)
```bash
python3 main,py --foods foods_example.json --targets targets_example.json
```

## Usage Example (Inline Arguments)
```bash
python3 main,py \
  --foods '{"Oatmeal": {"cal": 150, "protein": 5, "min": 2}, "Banana": {"cal": 105, "protein": 1, "min": 2}, "Chia_seeds": {"cal": 150, "protein": 5, "min": 1}, "Lentils": {"cal": 100, "protein": 8, "min": 1}, "Chickpeas": {"cal": 120, "protein": 6, "min": 1}, "Rice": {"cal": 160, "protein": 4, "min": 1}, "Rotini": {"cal": 190, "protein": 7, "min": 1}, "Edamame": {"cal": 90, "protein": 10, "min": 0}, "Apple": {"cal": 130, "protein": 0, "min": 0}, "Nuts": {"cal": 170, "protein": 8, "min": 0}}' \
  --targets '{"target_cal": 2200, "cal_tolerance_percent": 2, "min_protein": 110}'
```

## Usage Example Output
Both of the above examples will print the following output

```bash
python3 main,py --foods foods_example.json --targets targets_example.json
Optimizing meal plan...

OPTIMAL MEAL PLAN:
============================================================

BREAKFAST:
  Oatmeal: 2.00 servings (min: 2)
  Banana: 2.00 servings (min: 2)
  Chia_seeds: 1.00 servings (min: 1)
  Subtotal: 660 cal, 17.0g protein

LUNCH/DINNER:
  Lentils: 3.71 servings (min: 1)
  Chickpeas: 2.16 servings (min: 1)
  Rice: 1.00 servings (min: 1)
  Rotini: 1.00 servings (min: 1)
  Subtotal: 980 cal, 53.6g protein

SNACKS:
  Edamame: 4.12 servings (min: 0)
  Nuts: 1.11 servings (min: 0)
  Subtotal: 560 cal, 50.1g protein

============================================================
Total Calories: 2200.0 (range: 2156-2244)
Total Protein: 120.7g (min: 110g)
============================================================

✓ Calories in range: True
✓ Protein over minimum: True
✓ Optimization successful: True

🎯 ALL CONSTRAINTS MET!
```