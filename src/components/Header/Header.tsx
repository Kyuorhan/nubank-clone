import React, { useState } from "react"
import { TouchableOpacity } from "react-native"

import { Ionicons } from "@expo/vector-icons"

import {
  Container,
  UpperView,
  UserIconView,
  OptionIcon,
  TextWelcome
} from "./styles"

export function Header() {
  const [showBalance, setShowBalance] = useState(false)

  return (
    <Container>
      <UpperView>
        <UserIconView>
          <Ionicons name="person-outline" size={20} color="#fff" />
        </UserIconView>

        <OptionIcon>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            {showBalance ? (
              <Ionicons name="eye-outline" size={25} color="#fff" style={{ marginRight: 16 }} />
            ) : (
              <Ionicons name="eye-off-outline" size={25} color="#fff" style={{ marginRight: 16 }} />
            )}

          </TouchableOpacity>
          <Ionicons name="help-circle-outline" size={25} color="#fff" style={{ marginRight: 16 }} />
          <Ionicons name="mail-outline" size={25} color="#fff" />
        </OptionIcon>
      </UpperView>
      <TextWelcome>
        Olá, john
      </TextWelcome>
    </Container>
  )
}
