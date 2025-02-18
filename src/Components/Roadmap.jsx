"use client"

import { useState } from "react"
import { FaCircleCheck } from "react-icons/fa6";
export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(2)

  const phases = [
    {
      id: 1,
      title: "PHASE 1",
      date: "(Q4 2024)",
      items: [
        "Smart contract creation",
        "Smart contract audit",
        "Community and social channels established",
        "Website Live",
        "Set token pre-sales live and complete various token presale rounds",
      ],
    },
    {
      id: 2,
      title: "PHASE 2",
      date: "(Q4 2024)",
      items: [
        "Wallet integration: Connect any wallet with multiple providers, MetaMask, WalletConnect etc.",
        "Launch schedule for the first 10 weekly Supercar competitions",
        "3x Top 10 CEX listings",
        "Initial VICE burn-activated",
        "TGE, Launch Via DEX + CEX",
        "Initial VICE burn-activated",
      ],
    },
    {
      id: 3,
      title: "PHASE 3",
      date: "(Q1 2025)",
      items: [
        "Launch VIP and Membership NFTs",
        "Upgrade to 2 weekly competitions",
        'Set "promo" section to go live',
        "Launch RewardPlay Feature",
      ],
    },
  ]

  return (
    <div className="bg-back_color w-full py-[254.24px]">
      <h1 className="text-center text-[100px] font-bold text-white mb-[114px]">$VICE ROADMAP</h1>
      <div className="w-full flex justify-between items-center mx-auto pb-[180px]">
        {phases.map((phase) => (
          <div class={`relative p-1 rounded-[40px] ${activePhase === phase.id ? "bg-black" : "bg-gradient-to-r from-[#55A5EE] to-[#E00B7C]"} `}>
            <div
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`rounded-[40px] p-[60.85px] h-[980.4px] w-[729.6px] cursor-pointer transition-all duration-300 flex flex-col items-stretch
                ${activePhase === phase.id ? "card-background" : "bg-back_color" }`} >
                <div className="text-center">
                  <h2 className="text-[60px] font-bold text-white mt-10">{phase.title}</h2>
                  <p className="text-gray-400 text-[18px]">{phase.date}</p>
                </div>
                {/* Divider */}
                <div className="h-px bg-white/70 my-8"></div>
                <div className="flex-grow">
                  <ul className="flex flex-col justify-between h-full pt-[20px]">
                    {phase.items.map((item, index) => (
                      <li key={index} className="flex justify-start items-center text-white">
                        <span className="text-[18px]">
                          <FaCircleCheck className={`${activePhase === phase.id ? "text-[#E00B7C] " : "text-[#1552F0]"} text-[18px] mr-5`}/>
                        </span>
                        {/* <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" /> */}
                        <span className="text-[32px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

