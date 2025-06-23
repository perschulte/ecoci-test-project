# EcoCI Test Project

This project tests the EcoCI GitHub Action for measuring CO₂ emissions in CI/CD pipelines.

[![CO₂ Emissions](https://badge.ecoci.dev/perschulte/ecoci-test-project.svg)](https://ecoci.dev/perschulte/ecoci-test-project)

## Test Scenarios

### Quick Tasks (Low Energy)
- `npm test` - Simple test suite
- `npm run quick-task` - Minimal echo command

### Heavy Tasks (High Energy)  
- `npm run build` - Build simulation with sleep
- `npm run heavy-task` - CPU and memory intensive computation

## Expected Results

| Task | Expected Energy | Expected CO₂ | Duration |
|------|----------------|--------------|----------|
| npm test | ~0.001 kWh | ~0.0005 kg | ~1.5s |
| quick-task | ~0.0001 kWh | ~0.00005 kg | ~0.1s |
| build | ~0.002 kWh | ~0.001 kg | ~2s |
| heavy-task | ~0.005 kWh | ~0.002 kg | ~3-5s |

## Usage

The EcoCI Action automatically measures energy consumption and CO₂ emissions for each command:

```yaml
- name: Measure energy consumption
  uses: perschulte/ecoci@main
  with:
    command: 'npm test'
    electricity-maps-api-key: ${{ secrets.ELECTRICITY_MAPS_API_KEY }}
```

## Results

Check the Actions tab to see energy measurements for each run!