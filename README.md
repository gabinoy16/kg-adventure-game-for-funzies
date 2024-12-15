# kg-avdenture-game-for-funzies
Structured content for silly ChatGPT text-adventure game

---

# Template Instructions for Updating Pages

## Page Structure
Ensure every page follows this structure for readability and consistency:
- **Title**: Use a top-level header (`#`) for the page title.
- **Table of Contents**: Use a bulleted or numbered list linking to all sections within the page.
- **Section Headers**: Use second-level (`##`) and third-level (`###`) headers for sections and subsections.
- **Content**: Use paragraphs, lists, and tables to organize content clearly.

---

## Template Example

```markdown
# [Page Title]

[Brief introduction or summary of the page content]

## Table of Contents
1. [Section 1 Title](#section-1-title)
2. [Section 2 Title](#section-2-title)
   - [Subsection 2.1](#subsection-21)
   - [Subsection 2.2](#subsection-22)
3. [Section 3 Title](#section-3-title)

---

## Section 1 Title

[Detailed description of the section]

### Subsection 1.1 Title
- [Bullet point or explanation of content]
- [Additional details]

---

## Section 2 Title

[Content related to this section]

### Subsection 2.1 Title
| **Header 1**      | **Header 2**      | **Header 3**      |
|--------------------|-------------------|-------------------|
| Row 1, Column 1    | Row 1, Column 2   | Row 1, Column 3   |
| Row 2, Column 1    | Row 2, Column 2   | Row 2, Column 3   |

### Subsection 2.2 Title
[Content or details]

---

## Section 3 Title

- **Important Note**: Highlight any critical or contextual details.
- **References**: Use hyperlinks if linking to other pages.

---

## Notes/Changelog
[Optional: Add changelog details or additional notes here]
```

---

## Markdown Guidelines

1. **Headers**:
   - Use `#` for page titles, `##` for sections, and `###` for subsections.
   - Keep header titles concise and descriptive.

2. **Lists**:
   - Use `-` for unordered lists or `1.` for ordered lists.
   - Indent nested lists with two spaces.

3. **Tables**:
   - Align columns using the `|` separator.
   - Provide headers and ensure all rows are formatted evenly.

4. **Hyperlinks**:
   - Use `[Link Text](URL)` format to create internal or external links.
   - Cross-reference related sections/pages wherever relevant.

5. **Emphasis**:
   - Use `**bold**` or `*italic*` formatting to highlight key terms.

---

## Updating a Page

When updating existing markdown pages:
1. **Check the Table of Contents**:
   - Ensure new sections are added to the TOC and linked properly.

2. **Use Version Control**:
   - Add a **Changelog** section to note the changes (e.g., “Added Subsection 2.3”).

3. **Format for Readability**:
   - Keep consistent indentation, spacing, and line breaks.

4. **Cross-Link Related Content**:
   - Link to other markdown files in the repository if relevant.

---

## Example: Combat Rules Page

```markdown
# Combat Rules

A detailed guide to the mechanics of combat in KG's Adventure Game.

## Table of Contents
1. [Roll Mechanics](#roll-mechanics)
2. [Attack Types](#attack-types)
   - [Glancing Damage](#glancing-damage)
   - [Critical Hits](#critical-hits)
3. [Defense Strategies](#defense-strategies)
4. [Fatigue and Stamina](#fatigue-and-stamina)
5. [Winning Conditions](#winning-conditions)

---

## Roll Mechanics

Combat rolls determine the success of attacks and defenses.
- **Attack Rolls**: Add the attacker's skill modifier to a d20 roll.
- **Defense Rolls**: Add the defender's skill modifier to their d20 roll.

### Modifiers by Mastery Level
| **Mastery Level** | **Modifier** |
|--------------------|--------------|
| Novice             | +0           |
| Competent          | +1           |
| Adept              | +2           |
| Advanced           | +3           |
| Expert             | +4           |
| Elite              | +5           |
| Master             | +6           |

---

## Attack Types

### Glancing Damage
Occurs when the roll difference is between 1–3. Damage: **50% of base**.

### Critical Hits
Roll difference of 10+ results in **double damage**.

---

## Defense Strategies

Players may choose between:
- **Default Defense**: Stamina cost of -1.
- **Dodge**: Reduces stamina cost to 0 if Speed is higher than the attacker's.

---

## Fatigue and Stamina

| **Mastery Level** | **Stamina** |
|--------------------|-------------|
| Novice             | 10          |
| Competent          | 40          |
| Adept              | 90          |

---

## Winning Conditions

Combat ends when:
1. **Stamina reaches zero**: The character collapses after failing a stability roll.
2. **Victory objectives are achieved** (e.g., “First to 3 hits”).

---

## Notes/Changelog

- **12/14/2024**: Updated defense strategies to include dodge mechanics.
```

---

**Why Use This Template?**
1. **Consistency**: Ensures all pages follow a predictable structure.
2. **Ease of Navigation**: Internal linking and clear TOCs make browsing effortless.
3. **Scalability**: Easily extendable for future content updates.
