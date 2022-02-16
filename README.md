# Call-of-Duty-Scoreboard-OCR

Note: To use this on other Call of Duty titles change the config file to the right coorindates.


This tool can read the actual data on Call of Duty Scoreboards and makes the data ready for further usage.




**Sample screenshot:**

![sampleScoreboard](https://user-images.githubusercontent.com/47578609/154305172-afe27565-4dea-4653-9e06-9c71860c661c.png)

**Usage:**
```node
node App.js https://example.com/screenshot.jpg
```


**Example output:**

```javascript
Results {
  gamemode: 'CDL SEARCH & DESTROY',
  map: 'RAID',
  leftTeamScore: 6,
  leftTeamPlayers: [
    '[Lord]MohaK 2040 6 2443',
    '[fero]PROLUTE 1300 4 2460',
    '[f3]Spart 1000 5 1116',
    '[M]fire 450 3 1346'
  ],
  rightTeamPlayers: [
    '[f3]mock 2 1075 4 2209',
    '[f3]jintriod 775 1803',
    'Uli 725 3 1213',
    '[r]hcllcw 425 5 1374'
  ],
  rightTeamScore: 5
}
```
