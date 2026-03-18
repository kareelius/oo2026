# 🔋 Battery Simulator (TypeScript)

## 📌 Overview

This project simulates a battery charging system using TypeScript and a simple web interface.

It demonstrates object-oriented programming, DOM manipulation, and basic physics calculations.

---

## ⚙️ How Charging Works

* Charger power = **50 W (joules per second)**

* Energy formula:

  energy = power × time

* Conversion:

  1 mAh = 3.6 J

* Final formula used in code:

  addedCharge = (50 × seconds) / 3.6

---

## 🧠 Class Design

### Battery Class

The `Battery` class models a real battery with:

* `maxCapacity` → maximum charge
* `currentCharge` → current level

### Methods

* `getPercentage()`
  → Returns charge percentage

* `charge(seconds)`
  → Adds charge based on time

* `getCharge()`
  → Returns current charge and warnings

---

## ⚠️ Edge Cases

* If charging exceeds capacity:
  → Battery is capped and warning is shown

* If charge reaches 0:
  → Warning is displayed

---

## 🖥️ User Interface

The user can:

1. Enter charging time (seconds)
2. Click "Charge"
3. See:

   * Current charge (mAh)
   * Percentage (%)
   * Status message

---

## 🚀 How to Run

1. Compile TypeScript:
   tsc script.ts

2. Open index.html in browser

---

## 📚 Technologies

* TypeScript
* HTML
* JavaScript (compiled)
* DOM API

---

## 🎯 Purpose

This project was created as exam practice to demonstrate:

* Class design
* Mathematical calculations
* Web interaction
