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
    <div className="bg-back_color w-full mt-[127px] px-[100px]">
      <h1 className="text-center font-Space_Grotesk text-[48px] text-text_color mt-9 mb-28">VICE ROADMAP</h1>
      <div className="w-full flex justify-around items-center">
        {phases.map((phase) => (
          <div className={`relative p-1 rounded-[20px] ${activePhase === phase.id ? "bg-back_color" : "bg-gradient-to-r from-[#55A5EE] to-[#E00B7C]"} `}>
            <div
              key={phase.id}
              onMouseEnter={() => setActivePhase(phase.id)}
              className={`rounded-[20px] pl-6 pr-3 pt-8 h-[465px] w-[345px] cursor-pointer transition-all duration-300 flex flex-col items-stretch 
                ${activePhase === phase.id ? "card-background" : "bg-back_color" }`} >
                <div className="text-center">
                  <h2 className="text-[32px] font-bold text-text_color mt-10">{phase.title}</h2>
                  <p className="text-gray-400 text-[14px]">{phase.date}</p>
                </div>
                <div className="border-[#FFFFFF] border-b-[0.5px] border-solid mt-4 mx-4"></div>
                <div className="flex-grow mt-12">
                  <ul className="flex flex-col justify-between gap-y-2">
                    {phase.items.map((item, index) => (
                      <li key={index} className="flex items-start text-text_color">
                        <span className="text-[12px]">
                          <FaCircleCheck className={`${activePhase === phase.id ? "text-[#E00B7C]" : "text-[#1552F0]"} text-[12px]`}/>
                        </span>
                        <span className="text-[12px] ml-2 -mt-1">{item}</span>
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

