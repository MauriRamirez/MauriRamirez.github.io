console.log("project-data.js loaded");

const projects = {
  ykeer: {
    title: "The Ykeer",
    genre: "Endless-Runner Arcade",
    platform: "Mobile & WebGL",
        
    image: "assets/Ykeer/ListingImage.png",

    tools: "Unity, C#",
    roles: "Programmer and Designer",
    team: "Two",
    content: `
        <p><em>The Ykeer</em> is an <em>arcade endless scroller</em> game where the player controls a spaceship, <em>The Ykeer</em>, to face waves of an insectoid alien race. The design focuses on quick reflexes, varied enemies, and a competitive scoring system.</p>
        <br>
        <p><strong>Key features:</strong></p>
        <ul>
          <li>Implementation of a control system adapted for touch screens</li>
          <li>Progressive enemy spawning system based on a "marble bag" algorithm</li>
          <li>Use of <em>object pooling</em> to optimize performance</li>
          <li>First personal score saving and loading system</li>
        </ul>
        <br>
    `,
    unity: {
      buildName: "TheYkeer-WebGLBuild",
      buildUrl: "assets/webgl/TheYkeer-WebGLBuild/Build", 
      companyName: "Lechuga Studios",
      productVersion: "1.0.0",
      resolution: {
          width: 600,
          height: 960
        }
    }
  },
  rogue: {
    title: "Legend of Mors",
    genre: "Action Adventure",
    platform: "PC",
    
    image: "assets/Rogue/StoreSystem.jpeg",

    tools: "Unity, C#, Aseprite",
    roles: "Programmer, Designer, & Artist",
    team: "Two",
    content: `
        <p><em>The Legend of Mors</em> is a 2D <em>pixel art</em> action-adventure game inspired by the <em>Zelda</em> and <em>Souls</em> series. The player controls a young adventurer who, while searching for treasures, enters for the first time a dungeon filled with traps, combat, and secrets.</p>
        <br>
        <p><strong>Key features:</strong></p>
        <ul>
          <li>Dynamic level system: map rooms contain internal conditions that, when fulfilled, unlock doors, rewards, or progression</li>
          <li>Modular combat system: attacks are structures that store animations, damage, and conditions, enabling chained <em>combos</em> and complex weapon behavior</li>
          <li>Aesthetic and narrative design influenced by <em>Into the Abyss</em> and <em>Dungeon Meshi</em>: a city built atop an economically dependent dungeon</li>
          <li><em>Zelda</em> inspiration for exploration and puzzle-solving; <em>Souls</em> inspiration for combat and item progression</li>
        </ul>
        <br>
        <a href="blog.html?blogs=rogue"><button>Check out the Dev Blogs</button></a>
        <br><br>
`,
    unity: null
  },
  scout: {
    title: "Scout",
    genre: "Observation & Strategy",
    platform: "PC",
    
    image: "assets/Scout/ListingImage.png",
    
    tools: "Unity, C#, Aseprite, Blender",
    roles: "Programmer, Designer, & Artist",
    team: "Solo",
    content: `
    <p>Interactive work in development, in a <em>3D pixel art</em> style, that seeks to convey an intimate and self-contained experience similar to a short story. The player assumes the role of a military explorer on a reconnaissance mission within an enemy camp. The map, carefully reduced in scale, allows for a deep focus on observation and analysis, without direct combat.</p>
    <br>
    <p><strong>Key characteristics:</strong></p>
    <ul>
      <li>Enemy detection system inspired by games like <em>Assassin’s Creed</em>, where stealth is based on avoiding the line of sight.</li>
      <li>Tools such as binoculars and a player-editable notebook enable free and personalized note-taking.</li>
      <li>The protagonist does not fight: only observes, hides, and records information.</li>
      <li>Simple and efficient movement designed to not distract from the narrative focus.</li>
      <li>Original visual approach: sprites created in Aseprite combined with elements modeled in Blender.</li>
    </ul>
    <br>
    `,
    
    unity: null

  },

  hornigold: {
    title: "Hornigold",
    genre: "Competititve, Strategy, & Dexterity",
    platform: "Board Game",
        
    image: "assets/Hornigold/ListingImage.png",

    tools: "Inkscape, Fusion360, 3D Printing",
    roles: "Rules, Component Design, & Art",
    team: "Two",
    content: `
        <p>Turn-based pirate strategy game where each player controls a ship using a customized deck of action cards. The match unfolds in turns composed of 4 "tides", where actions are revealed and resolved simultaneously according to card order. The core mechanic features naval combat through a specially designed toy cannon, which produces variable outcomes (miss, hit, direct hit) based on player precision, blending tactical strategy with real skill.</p>
        <br>
        <p><strong>Highlighted elements:</strong></p>
        <ul>
          <li>Physical combat with functional cannon and custom-designed 3D printed miniatures</li>
          <li>Modular map for high replayability</li>
          <li>Resource economy system with ports for buying, selling, and ship upgrades</li>
          <li>Two victory conditions: military domination or gold accumulation</li>
          <li>Action programming mechanics and simultaneous resolution</li>
        </ul>
        <br>
    `,
    
    unity: null

  },
  
  cyclesOfRevolt: {
    title: "Cycles of Revolt",
    genre: "Competititve, Strategy, & Dexterity",
    platform: "Board Game",
    
    image: "assets/CyclesOfRevolt/ListingImage.png",

    tools: "Excel, Inkscape",
    roles: "Everything",
    team: "Solo",
    content: `
        <p>Strategic political game for 3-6 players set in a society on the brink of collapse. One player assumes the role of the Dictator, while others start as citizens with no defined loyalties, with the possibility of becoming revolutionaries. Players manage resources, recruit Agents with unique abilities, and manipulate the <em>Tension Gauge</em>, which measures social unrest and can trigger a Revolution.</p>
        <br>
        <p><strong>Highlighted mechanics:</strong></p>
        <ul>
          <li>Social class system that limits or enhances options based on the player's position</li>
          <li>Agent recruitment with unique round effects; interchangeable cards that define each match</li>
          <li>Three victory conditions for revolutionaries: Popularity, Control, or Economy</li>
          <li>Persistent progression (<em>legacy</em>): decisions and outcomes from one match alter roles, classes, and conditions in subsequent games</li>
          <li>The Dictator wins if they prevent revolution or survive without being overthrown</li>
        </ul>
        <br>
        <a href="https://drive.google.com/file/d/1ZPmF5CWBzwbkDXWyPrYlFcyDBvl1kPYV/view?usp=sharing"><button>Check out the Game Manual</button></a>
        <br><br>

    `,
    
    unity: null

  },
  
  fragileWall: {
    title: "A Fragile Wall",
    genre: "Dexterity Party Game",
    platform: "Board Game",
    
    image: "assets/FragileWall/ListingImage.png",

    tools: "Inkscape, Fusion360, 3D Printing",
    roles: "Everything",
    team: "Solo",
    content: `
        <p>Strategy game for 2-4 players that combines pressure building, physical projectile attacks, and structural verification. One player assumes the role of the Architect, who must build a wall in 3 minutes following the secret requirements of a Blueprint card, using a limited set of bricks on a grid base.</p>
        <br>
        <p>The other players embody the Revolutionaries and have access to a functional toy cannon (designed by the author) to fire real projectiles from fixed positions with the goal of knocking down the wall. The game unfolds in three attack rounds with limited ammunition. If the wall survives intact and meets the blueprint's measurements, the Architect wins. If it collapses or fails the final ruler verification, the Revolutionaries win.</p>
        <br>
        <p><strong>Highlighted elements:</strong></p>
        <ul>
          <li>Custom physical components: modular bricks and functional spring cannon, both 3D printed</li>
          <li>Blueprint cards with height, width, and foundation requirements for precision building</li>
          <li>Direct interaction between asymmetric roles creating intense physical and strategic tension</li>
          <li>High replayability with expandable materials and victory conditions</li>
        </ul>
        <br>
        <a href="https://drive.google.com/file/d/1SgegYebSWjVLJftDoYBBr3xMM0HDJR37/view?usp=sharing"><button>Check out the Game Manual</button></a>
        <br><br>
    `,
    
    unity: null

  },

  MovementSystem: {
    title: "Movement & Camera System",
    genre: "",
    platform: "PC",
    tools: "Unity, C#",
    roles: "",
    team: "",
    image: "",
    content: `
      <p>This first prototype focuses on establishing smooth 2D movement and a responsive camera system. I built a flexible character controller using Unity’s physics and custom input handling, supporting diagonal and axis-locked movement.</p>
      <br>
      <p>The camera uses a look-ahead feature that subtly shifts based on direction to improve visibility during exploration. This system acts as the foundation for all later gameplay — movement had to feel good before anything else was layered on top.</p>
      <br>
    `,
    unity: {
      buildName: "MovementSystem",
      buildUrl: "assets/webgl/MovementSystem/Build", 
      companyName: "Lechuga Studios",
      productVersion: "1.0.0",
      resolution: {
          width: 800,
          height: 480
        }
    }
  },
  CombatSystem: {
    title: "Combat System",
    genre: "",
    platform: "PC",
    tools: "Unity, C#",
    roles: "",
    team: "",
    image: "",
    content: `
      <p>With movement solid, the <em>Combat System</em> update introduces a melee and ranged combat system. I implemented directional attacks, hitboxes, knockback, and damage handling for close combat. Enemies can react dynamically to player actions, with simple AI that tracks and attacks. I also added a shooting mechanic using projectile-based attacks, allowing both the player and enemies to fire in specific directions.</p>
      <br>
      <p>To keep performance tight, I implemented a pooling system for projectiles — reducing instantiation costs and ensuring consistent behavior. Under the hood, a lightweight state machine manages combat flow, transitioning between idle, attacking, shooting, and hit states. This modular structure makes it easy to expand with new weapons or abilities.</p>
      <br>
    `,
    unity: {
      buildName: "CombatSystem",
      buildUrl: "assets/webgl/CombatSystem/Build", 
      companyName: "Lechuga Studios",
      productVersion: "1.0.0",
      resolution: {
          width: 800,
          height: 480
        }
    }
  },
    InventorySystem: {
    title: "Inventory System",
    genre: "",
    platform: "PC",
    tools: "Unity, C#",
    roles: "",
    team: "",
    image: "",
    content: `
      <p>The <em>Inventory System</em> builds the interface and logic behind equippable items. I created an inventory UI that supports drag-and-drop interactions, slot-based equipment (like sword and shield), and item stats. Each item is defined as a ScriptableObject for easy reuse. Equipping an item changes the player’s attack behavior and animations, while unequipping updates the state accordingly. This was my first step toward player customization and progression.</p>
      <br>
    `,
    unity: {
      buildName: "InventorySystem",
      buildUrl: "assets/webgl/InventorySystem/Build", 
      companyName: "Lechuga Studios",
      productVersion: "1.0.0",
      resolution: {
          width: 800,
          height: 480
        }
    }
  },
  StoreSystem: {
    title: "Store System",
    genre: "",
    platform: "PC",
    tools: "Unity, C#",
    roles: "",
    team: "",
    image: "",
    content: `
      <p>The <em>Store System</em> update adds an in-game shop where the player can spend coins to buy gear. I set up a vendor NPC that opens a shop menu, showing available items, prices, and descriptions. Each purchase checks the player’s gold, deducts currency, and sends the item to the inventory. It ties back to the inventory system and starts forming a basic economy loop.</p>
      <br>
    `,
    unity: {
      buildName: "StoreSystem",
      buildUrl: "assets/webgl/StoreSystem/Build", 
      companyName: "Lechuga Studios",
      productVersion: "1.0.0",
      resolution: {
          width: 800,
          height: 480
        }
    }
  }
};
