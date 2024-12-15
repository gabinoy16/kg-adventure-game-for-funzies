# Combat Rules 
v1.3

## Table of Contents
- [Mastery Level Modifiers](#mastery-level-modifiers)
- [Rolling for Offense and Defense](#rolling-for-offense-and-defense)
- [Fatigue and Stamina Calculation](#fatigue-and-stamina-calculation)
- [Damage Calculation](#damage-calculation)
- [Stability Rolls](#stability-rolls)
- [Types of Attacks](#types-of-attacks)
- [Types of Defense](#types-of-defense)
- [Winning Conditions](#winning-conditions)
- [Combat Flow v1.1](#combat-flow-v11)
- [Combat Round Template](#combat-round-template)
- [Combat Round Example](#combat-round-example)

---

## Mastery Level Modifiers

Each character’s mastery level in relevant skills adds a modifier to their rolls:

| **Mastery Level** | **Modifier** |
|--------------------|--------------|
| Novice             | +0           |
| Competent          | +1           |
| Adept              | +2           |
| Advanced           | +3           |
| Expert             | +4           |
| Elite              | +5           |
| Master             | +6           |

Modifiers apply to both offensive and defensive rolls based on relevant skills.

---

## Rolling for Offense and Defense

Combat actions involve opposed rolls:

- **Attacker rolls**: Attack roll + offense modifier + bonus based on Attack Type selected.
- **Defender rolls**: Defense roll + defense modifier.

### Success Thresholds

- **Attack Hits**: If attack roll > defense roll.
  - *Example*: Attacker rolls 18; defender rolls 15. Attack hits.
- **Attack Blocked**: If defense roll ≥ attack roll.
  - *Example*: Attacker rolls 14; defender rolls 16. Attack blocked.

### Critical Advantage/Disadvantage

- If defense roll exceeds attack roll by 10+, the defender gains advantage on their next offensive roll (counterattack opening).
- If attack roll exceeds defense roll by 10+, the attacker gains advantage on their next attack.

### Advantage Mechanics

- Roll twice and take the higher value.
- Triggered by:
  - A 2-level mastery difference in relevant skills.
  - A roll difference of 10+ (critical thresholds as described above).

---

## Fatigue and Stamina Calculation

### Stamina Formula

Based on endurance mastery level: `Stamina = 10 × (Mastery Index)^2`

### Mastery Index Values

| **Mastery Level** | **Mastery Index** |
|--------------------|-------------------|
| Novice             | 1                 |
| Competent          | 2                 |
| Adept              | 3                 |
| Advanced           | 4                 |
| Expert             | 5                 |
| Elite              | 6                 |
| Master             | 7                 |

For example, if a character has "Adept" Endurance skill mastery, their mastery index would be 3, and their stamina is calculated as `10 * (3)^2 = 90` 

### Stamina Impact

- When stamina **≤ 25%**, the character becomes **exhausted**:
  - Rolls suffer a **-2 penalty**.
  - Movement speed decreases.

---

## Damage Calculation

Damage is based on the roll difference between attacker and defender:

| **Roll Difference** | **Damage Type**   | **Damage Points** |
|----------------------|-------------------|-------------------|
| 1-3                 | Glancing Damage   | 3                 |
| 4-9                 | Solid Damage      | 5                 |
| 10+                 | Critical Damage   | 10                |

The attacker’s roll must exceed the defender’s roll to deal damage. Damage is then deducted from stamina.

---

## Stability Rolls

When a character’s stamina drops to 0, they must roll for stability to stay conscious.

### Stability Roll

| **Condition**       | **Roll Formula**                |
|---------------------|---------------------------------|
| Stability Roll      | Roll 1d20 + Endurance Modifier |
| DC                  | 10 - (Offense Modifier - Defense Modifier) |

### Outcomes

- **Pass**: The character remains standing but loses their next action to recover.
- **Fail**: The character collapses and is out of combat.

---

## Types of Attacks

Characters may choose attack types before rolling to adjust their strategy:

| **Attack Type**    | **Stamina Cost** | **Bonus to Roll** |
|--------------------|------------------|-------------------|
| Quick Attack       | -2              | None              |
| Focused Attack     | -4              | +2                |
| Powerful Attack    | -6              | +4                |

If no attack type is declared, a Quick Attack is assumed.

---

## Types of Defense

| **Defense Type**      | **Stamina Cost** | **Bonus to Roll** |
|-----------------------|------------------|-------------------|
| (Default) Defense     | -1              | None              |
| Dodge                 | -1 (or 0)*      | None              |

*Dodge costs 0 stamina if the defender's speed mastery is at least one level above the attacker.

---

## Winning Conditions

Combat ends when:

- One character’s stamina is fully depleted, and they fail a stability roll.
- A specific win condition (e.g., “First to 3 hits”) is met.

---

## Combat Flow v1.1

### Initiative

- **Roll Initiative**:
  - Roll 1d20 for all participants to determine the combat order.
  - Resolve ties using:
    - Higher relevant mastery level (e.g., Speed or Tactical Combat).
    - Secondary d20 roll if mastery is equal.
- **Calculate Initial Stamina (Fatigue Capacity)**:
  - Use the stamina formula from "Combat Rules."

### Declare Actions

At the start of a turn, the acting character declares their intended action:

- **Offensive Actions**:
  - Specify attack type.
- **Defensive Actions**:
  - Prepare to block or dodge an anticipated attack.
- **Special Actions**:
  - Cast a spell, activate an ability, or perform non-standard moves.

### Roll for Action

- **Offense**: Roll 1d20 + Offense Modifier(s).
- **Defense**: Roll 1d20 + Defense Modifier(s).
- **Special Actions**: Roll as determined by the nature of the action (e.g., a spell might require a specific roll type).

### Compare Results

- Compare offensive and defensive rolls:
  - **Attack Hits**: If attack roll > defense roll.
  - **Attack Blocked**: If defense roll ≥ attack roll.
  - Calculate damage based on the roll difference and attack type.

### Apply Stamina Costs

- **Attack Type Costs** (as defined in Combat Rules).
- **Defensive Costs** (as defined in Combat Rules).
- **Special Action Costs**: As dictated by the specific nature of the action.

### Exhaustion Check

- If stamina **≤ 25%**, apply exhaustion penalties:
  - Rolls suffer **-2 penalty**.
  - Movement speed decreases.
- If stamina reaches 0, initiate a Stability Roll:
  - Roll 1d20 + Endurance Modifier vs. Stability DC.

### Advantage and Status Effects

- If a roll exceeds the opposing roll by **10 or more**:
  - Gain **advantage** on the next roll.
- Apply any relevant status effects or conditions (e.g., stunned, fatigued).

### Next Combatant

- Turn ends; move to the next character in initiative order.
- Repeat steps 2-7 for each round or sub-round until combat concludes.

A full "round" is a whole number versus a "sub-round" is a digit (for example, Round 1, sub-round 2 would be "Round 1.2"). Every 10 sub-rounds is considered a round.

---

## Combat Round Template

### Action Declaration

- Identify the attacking party (e.g., Gatz or Opponent) and declare their chosen action (e.g., attack type or defense).
- State the roll and modifiers (e.g., base roll + attack/defense modifier + attack type bonus).

### Response Declaration

- Identify the defending party and their action (e.g., dodge, block, counterattack).
- State the roll and modifiers for the response (e.g., base roll + defense modifier).

### Outcome Determination

- Compare rolls to determine whether the attack lands, is blocked, or is matched.
- Apply damage if applicable, based on the roll difference and the damage type.

### Stamina Cost Calculation

- Deduct stamina costs for the chosen attack/defense actions.
- Show updated stamina values for both parties.

### Narrative Context

- Provide a brief, engaging narrative of the exchange, including attack style, defense success/failure, and any noticeable consequences.

---

## Combat Round Example

### Action Declaration

- Gatz attacks with a Quick Attack.
- Roll: 15 + 4 (offense modifier) = 19.

### Response Declaration

- Opponent defends with a block.
- Roll: 13 + 2 (defense modifier) = 15.

### Outcome Determination

- Gatz’s attack lands with Solid Damage (4-9 difference).
- **Damage**: -5 to the opponent’s stamina.

### Stamina Cost Calculation

- Gatz: Current stamina -2 (Quick Attack) = updated value.
- Opponent: Current stamina -5 (damage) = updated value.

### Narrative Context

- Gatz strikes with precision, his blade finding an opening in the opponent’s defenses. The opponent recoils, visibly weakened but still ready to fight.
