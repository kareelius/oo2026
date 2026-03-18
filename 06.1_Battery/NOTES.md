# 🧪 Clean Exam Interpretation

## 🧠 Task Breakdown

### 1. Class Structure

* Create a `Battery` class
* Properties:

  * `maxCapacity` (mAh)
  * `currentCharge` (mAh)

### 2. Methods

* `getPercentage()` → returns battery %
* `charge(seconds)` → adds charge
* `getCharge()` → returns current charge

---

## ⚙️ Charging Logic

* Power = **50 W**
* 1 mAh = **3.6 J**

### Formula

```
addedCharge = (50 * seconds) / 3.6
```

---

## ⚠️ Edge Cases

* ⚠️ Overcharge → warning
* ⚠️ Empty battery → warning

---

## 🖥️ UI Requirements

* Input: seconds
* Button: charge
* Display:

  * charge (mAh)
  * percentage (%)
  * status message
