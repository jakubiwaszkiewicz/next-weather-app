'use client'

import { Card, Divider, Subtitle, Text } from "@tremor/react"
import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#394f68] to-[#00A67E] p-10 flex-col justify-center items-center">
        <Card className="max-w-4xl mx-auto">
            <Text className=" text-6xl font-bold text-center mb-10">
                Weather AI
            </Text>
            <Subtitle className="text-xl text-center">
                Powered by OpenAI, Next.js 13.3, TailwindCSS, Tremor 2.0, country-state-city + More!
            </Subtitle>
            <Divider className="my-10"/>
            <Card className="bg-gradient-to-br from-[#394f68] to-[#00A67E]">
                <CityPicker/>
            </Card>
        </Card>
    </main>
  )
}
