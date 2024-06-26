import { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }
    if (participantName.trim() === "" || participantName.trim().length === 0) {
      return Alert.alert(
        "Nome inválido",
        "O nome do participante não pode estar vazio."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quarta, 26 de Junho de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
