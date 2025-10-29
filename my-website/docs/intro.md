---
sidebar_position: 1
slug: /
---

# Welcome to Compose

:::warning Early Stage Development
Compose is currently in development and only available to contributors. It is **NOT production ready**. Use at your own risk in development environments only.
:::

## What is Compose?

**Compose** is a revolutionary smart contract library that helps developers create sophisticated smart contract systems using the **ERC-2535 Diamond** standard. It's designed from the ground up to prioritize code readability, on-chain composability, and developer understanding.

### The Vision

Imagine having access to a comprehensive, verified standard library of smart contract components that you can combine like LEGO blocks to build complex systems—all deployed once on-chain and reused across your projects. That's Compose.

## What Compose Provides

### 🎯 On-Chain Standard Library

Access a growing collection of **verified, audited facets** (modular smart contracts) that are:
- Deployed once and reused across multiple diamonds
- Available on multiple blockchains at the same addresses
- Fully compatible with ERC-2535 Diamond standard
- Designed for maximum readability and safety

### 🔧 Building Blocks for Diamond Systems

Compose gives you:
- **Facets**: Complete, self-contained implementations (ERC-20, ERC-721, access control, etc.)
- **Libraries**: Helper functions to integrate your custom facets with Compose functionality
- **Patterns**: Proven approaches to combine facets and build complex systems
- **Standards**: Best practices for Smart Contract Oriented Programming (SCOP)

### 💡 A New Way of Thinking

Forget traditional smart contract development. Compose introduces **Smart Contract Oriented Programming (SCOP)**, which:
- Prioritizes readability over cleverness
- Intentionally restricts complex Solidity features
- Favors composition over inheritance
- Emphasizes on-chain reusability

## Quick Example

Here's how you can extend Compose functionality in your custom facet:

```solidity
// Your custom facet integrates with Compose using libraries
import {LibERC721} from "compose/LibERC721.sol";

contract GameNFTFacet {
    function mintWithGameLogic(address player, uint256 tokenId) external {
        // Your custom game logic
        require(playerHasEnoughPoints(player), "Not enough points");
        
        // Use LibERC721 to mint - this modifies the SAME storage
        // that ERC721Facet uses for balanceOf(), ownerOf(), etc.
        LibERC721.mint(player, tokenId);
        
        // Now the player owns this NFT and can use standard
        // ERC721Facet.transferFrom() to transfer it!
        updatePlayerStats(player);
    }
}
```

Both your `GameNFTFacet` and the standard `ERC721Facet` work with the **same storage** in your diamond. This is the power of Compose's shared storage architecture.

## Why Choose Compose?

### ✅ For Projects That Value:
- **Readability**: Code that's easy to understand and audit
- **Reusability**: Deploy once, use everywhere
- **Standards**: Battle-tested, community-reviewed implementations
- **Upgradability**: Full power of ERC-2535 Diamonds
- **Composability**: Mix and match functionality without conflicts

### 🎓 Perfect For:
- Building complex DeFi protocols
- Creating NFT platforms with custom logic
- Developing DAO governance systems
- Projects requiring upgradeable smart contracts
- Teams that prioritize code quality and maintainability

## Core Principles

Compose is built on these foundational principles:

1. **Read First**: Code clarity is the top priority
2. **Diamond-Native**: Designed specifically for ERC-2535
3. **Composition Over Inheritance**: Combine facets instead of inheriting
4. **Intentional Simplicity**: Banned features lead to clearer code
5. **On-Chain Composability**: Reuse deployed contracts

## Next Steps

<div className="row" style={{marginTop: '2rem'}}>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>🚀 Get Started</h3>
      </div>
      <div className="card__body">
        <p>Set up your development environment and start building with Compose.</p>
      </div>
      <div className="card__footer">
        <a href="/docs/getting-started/installation" className="button button--primary button--block">
          Installation Guide
        </a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>💡 Quick Start</h3>
      </div>
      <div className="card__body">
        <p>Build your first diamond in under 5 minutes with Compose facets.</p>
      </div>
      <div className="card__footer">
        <a href="/docs/getting-started/quick-start" className="button button--primary button--block">
          Quick Start Guide
        </a>
      </div>
    </div>
  </div>
</div>

## Community & Support

Compose is built with 🩵 by a vibrant community of developers who care about code quality.

- 💬 **[Join our Discord](https://discord.gg/compose)** - Get help and connect with other developers
- 🐙 **[GitHub Discussions](https://github.com/Perfect-Abstractions/Compose/discussions)** - Share ideas and ask questions
- 🤝 **[GitHub Repository](https://github.com/Perfect-Abstractions/Compose)** - Check out the source code
- 📝 **[Blog](/blog)** - Stay updated with the latest news and tutorials

---

Ready to revolutionize your smart contract development? Let's get started! 🚀
