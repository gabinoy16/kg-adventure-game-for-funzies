# Game Mechanics

## Combat Rules
1. [Mastery Level Modifiers](#mastery-level-modifiers)
2. [Rolling for Offense and Defense](#rolling-for-offense-and-defense)
3. [Fatigue and Stamina Calculation](#fatigue-and-stamina-calculation)
4. [Damage Calculation](#damage-calculation)
5. [Stability Rolls](#stability-rolls)
6. [Types of Attacks](#types-of-attacks)
7. [Types of Defense](#types-of-defense)
8. [Winning Conditions](#winning-conditions)

## Combat Flow
1. [Initiative](#1-initiative)
2. [Declare Actions](#2-declare-actions)
3. [Check for Advantage](#3-check-for-advantage)
4. [Roll for Action](#4-roll-for-action)
5. [Compare Results and Determine Outcome](#5-compare-results-and-determine-outcome)
6. [Apply Stamina Costs](#6-apply-stamina-costs)
7. [Check for New Advantage](#7-check-for-new-advantage)
8. [Stability Check (If Stamina Reaches 0)](#8-stability-check-if-stamina-reaches-0)
9. [Apply Status Effects and Narrate](#9-apply-status-effects-and-narrate)
10. [Next Combatant](#10-next-combatant)
11. [Combat Flow Programmatic Sequence](#combat-flow-programmatic-sequence)

---

# Combat Rules 
(#combat-rules)

v1.3

## Mastery Level Modifiers

(#mastery-level-modifiers)

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

(#offense-and-defense)

Combat actions involve opposed rolls:

- **Attacker rolls**: Attack roll + offense modifier + bonus based on Attack Type selected.
- **Defender rolls**: Defense roll + defense modifier.

### Success Thresholds

(#success-thresholds)

- **Attack Hits**: If attack roll > defense roll.
  - *Example*: Attacker rolls 18; defender rolls 15. Attack hits.
- **Attack Blocked**: If defense roll ≥ attack roll.
  - *Example*: Attacker rolls 14; defender rolls 16. Attack blocked.

---

### Critical, Advantage and Disadvantage

(#critical-advantage-disadvantage, #critical)

- If defense roll exceeds attack roll by 10+, the defender gains advantage on their next offensive roll (counterattack opening).
- If attack roll exceeds defense roll by 10+, the attacker gains advantage on their next attack.

### Advantage Mechanics

(#advantage-mechanics, #advantage, #disadvantage)

- Roll twice and take the higher value.
- Triggered by:
  - A 2-level mastery difference in relevant skills.
  - A roll difference of 10+ (critical thresholds as described above).

## Fatigue and Stamina Calculation

(#fatigue-and-stamina-calculation)

### Stamina Formula

(#stamina-formula)

Based on endurance mastery level: `Stamina = 10 × (Mastery Index)^2`

### Mastery Index Values

(#mastery-index-values)

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

(#stamina-impact, #exhaustion)

- When stamina **≤ 25%**, the character becomes **exhausted**:
  - Rolls suffer a **-2 penalty**.
  - Movement speed decreases.

## Damage Calculation

(#damage-calculation)

Damage is based on the roll difference between attacker and defender:

| **Roll Difference** | **Damage Type**   | **Damage Points** |
|----------------------|-------------------|-------------------|
| 1-3                 | Glancing Damage   | 3                 |
| 4-9                 | Solid Damage      | 5                 |
| 10+                 | Critical Damage   | 10                |

The attacker’s roll must exceed the defender’s roll to deal damage. Damage is then deducted from stamina.

## Stability Rolls

(#stability-rolls)

When a character’s stamina drops to 0, they must roll for stability to stay conscious.

### Stability Roll

(#stability-roll-formula)

| **Condition**       | **Roll Formula**                |
|---------------------|---------------------------------|
| Stability Roll      | Roll 1d20 + Endurance Modifier |
| DC                  | 10 - (Offense Modifier - Defense Modifier) |

### Outcomes

(#stability-roll-outcomes)

- **Pass**: The character remains standing but loses their next action to recover.
- **Fail**: The character collapses and is out of combat.

## Types of Attacks

(#types-of-attacks)

Characters may choose attack types before rolling to adjust their strategy:

| **Attack Type**    | **Stamina Cost** | **Bonus to Roll** |
|--------------------|------------------|-------------------|
| Quick Attack       | -2              | None              |
| Focused Attack     | -4              | +2                |
| Powerful Attack    | -6              | +4                |

If no attack type is declared, a Quick Attack is assumed.

## Types of Defense

(#types-of-defense)

| **Defense Type**      | **Stamina Cost** | **Bonus to Roll** |
|-----------------------|------------------|-------------------|
| (Default) Defense     | -1              | None              |
| Dodge                 | -1 (or 0)*      | None              |

*Dodge costs 0 stamina if the defender's speed mastery is at least one level above the attacker.

## Winning Conditions

(#winning-conditions)

Combat ends when:

- One character’s stamina is fully depleted, and they fail a stability roll.
- A specific win condition (e.g., “First to 3 hits”) is met.

---

# Combat Flow 

(#combat-flow)

v1.2

### **1. Initiative**

(#initiative)

- Roll `1d20` for all participants to determine combat order.
- Resolve ties using:
  - Higher relevant mastery level (e.g., Speed or Tactical Combat).
  - Secondary `1d20` roll if mastery is equal.
- Calculate initial stamina (fatigue capacity) using the stamina formula.

### **2. Declare Actions**

(#declare-actions)

- At the start of a combatant's turn, they declare their intended action:
  - **Offensive Actions**: Specify attack type.
  - **Defensive Actions**: Prepare to block or dodge an anticipated attack.
  - **Special Actions**: Cast a spell, activate an ability, or perform non-standard moves.

### **3. Check for Advantage**

(#check-for-advantage)

- Before rolling, determine if **advantage** applies:
  - Refer to Combat Rules [Rolling for Offense and Defense](#rolling-for-offense-and-defense) on what creates advantage or disadvantage.
  - If advantage applies, roll twice and take the higher result.

### **4. Roll for Action**

(#roll-for-action)

- **Offense**: Roll `1d20 + Offense Modifier(s)` (with advantage if applicable).
- **Defense**: Roll `1d20 + Defense Modifier(s)` (with advantage if applicable).
- **Special Actions**: Roll as determined by the nature of the action (e.g., a spell might require a specific roll type).

### **5. Compare Results and Determine Outcome**

(#compare-results-outcome)

- Compare offensive and defensive rolls:
  - **Attack Hits**: If `attack roll > defense roll`.
  - **Attack Blocked**: If `defense roll ≥ attack roll`.
- Calculate damage based on:
  - The roll difference (Glancing, Solid, or Critical Damage).
  - The chosen attack type.
- Update stamina for the defender if damage is dealt.

### **6. Apply Stamina Costs**

(#apply-stamina-costs)

- Deduct stamina costs for the chosen attack or defense actions:
  - Offensive stamina costs depend on attack type.
  - Defensive stamina costs depend on the chosen defense action.
- If stamina falls below **25%**, apply exhaustion penalties:
  - Rolls suffer a `-2 penalty`.
  - Movement speed decreases.

### **7. Check for New Advantage**

(#check-new-advantage)

- After determining results, check if a new advantage is triggered for the next round:
  - **Roll Difference (10+)**: The combatant with the higher roll gains advantage.
  - Apply this advantage to their next roll.

### **8. Stability Check (If Stamina Reaches 0)**

(#stability-check)

- If a combatant’s stamina drops to 0, they must roll for stability:
  - Roll `1d20 + Endurance Modifier` against `DC = 10 - (Opponent’s Offense Modifier - Defender’s Defense Modifier)`.
- **Outcomes**:
  - **Pass**: The combatant remains standing but loses their next action.
  - **Fail**: The combatant collapses and is out of combat.

### **9. Apply Status Effects and Narrate**

(#apply-status-effects)

- Check for and apply any relevant status effects (e.g., stunned, fatigued, disoriented) triggered during the round.
- Narrate how the rolls play out.

### **10. Next Combatant**

(#next-combatant)

- End the current combatant’s turn and proceed to the next character in the initiative order.
- Repeat steps **2-9** for each combatant until the combat ends.


## Combat Flow Programmatic Sequence

```python
def check_advantage(combatant, opponent):
    mastery_diff = combatant.mastery_level - opponent.mastery_level
    # Advantage triggered by mastery-level difference
    if mastery_diff >= 2:
        return True
    # Check if combatant has advantage from a previous critical roll
    return combatant.has_advantage

def roll_action(combatant, action, advantage=False):
    if advantage:
        roll1 = roll_d20() + combatant.get_modifier(action)
        roll2 = roll_d20() + combatant.get_modifier(action)
        return max(roll1, roll2)
    return roll_d20() + combatant.get_modifier(action)

def check_new_advantage(combatant, attack_roll, defense_roll):
    # Trigger advantage on a critical roll difference (10+)
    if abs(attack_roll - defense_roll) >= 10:
        combatant.has_advantage = True
    else:
        combatant.has_advantage = False

def combat_round(combatants):
    # 1. Initiative
    initiative_order = sorted(combatants, key=lambda c: roll_initiative(c), reverse=True)
    
    for combatant in initiative_order:
        if combatant.stamina <= 0:
            continue  # Skip if combatant is incapacitated
        
        # 2. Declare Actions
        action = combatant.declare_action()
        
        # 3. Check for Advantage
        advantage = check_advantage(combatant, combatants)
        
        # 4. Roll for Action (Attack or Special Action)
        attack_roll = roll_action(combatant, action, advantage)
        
        # 5. Opponent's Response
        opponent = select_opponent(combatant, combatants)
        defense_action = opponent.declare_defense()
        defense_roll = roll_action(opponent, defense_action)
        
        # 6. Compare Results and Determine Outcome
        if attack_roll > defense_roll:
            damage = calculate_damage(attack_roll, defense_roll)
            opponent.stamina -= damage
            # Check if new advantage is triggered
            check_new_advantage(combatant, attack_roll, defense_roll)
        else:
            # Check if defender gains advantage
            check_new_advantage(opponent, defense_roll, attack_roll)
        
        # 7. Apply Stamina Costs
        combatant.stamina -= action.stamina_cost
        opponent.stamina -= defense_action.stamina_cost
        
        # 8. Exhaustion Check
        apply_exhaustion_penalties(combatant)
        apply_exhaustion_penalties(opponent)
        
        # 9. Stability Check
        if opponent.stamina <= 0:
            if not stability_roll(opponent):
                opponent.incapacitated = True
        
        # 10. Status Effects
        apply_status_effects(combatant)
        apply_status_effects(opponent)
    
    # Proceed to the next round or end combat if conditions are met

```
