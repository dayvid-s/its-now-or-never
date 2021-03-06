import React, {useState, useContext} from 'react';
import Icon  from 'react-native-vector-icons/Octicons';

import { KeyboardAvoidingView,
  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView 
  } from 'react-native';
  import {Context} from '../../context/Provider'


export default function App({navigation}) {
  const [inputBoxValue, setInputBoxValue] = useState();
  const {userChallenges, setUserChallenges} = useContext(Context)
  const {showOnlyCustomsOfUser, setShowOnlyCustomsOfUser} = useContext(Context)

  const handleAddChallenges = () => {
    if (inputBoxValue == null ){
      alert("Escreva algo")
    }else{
  
    Keyboard.dismiss();
    setUserChallenges([...userChallenges, inputBoxValue])
    setInputBoxValue(null);
    }
  }
  const handleRemoveChallenges = (index) => {
    if(userChallenges.length > 1){
      let itemsCopy = [...userChallenges];
      itemsCopy.splice(index, 1);
      setUserChallenges(itemsCopy)
    }else{
      let itemsCopy = [...userChallenges];
      itemsCopy.splice(index, 1);
      setUserChallenges(itemsCopy)
      setShowOnlyCustomsOfUser(false)
    }
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}

      <TouchableOpacity style={styles.iconGoBack} onPress={()=>{ navigation.goBack()}}  >
      <View style= {{right:-15, marginVertical:20}}>
        <Icon name='chevron-left' size={30} > </Icon>
      </View>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.challengesWrapper}>
        <Text style={styles.sectionTitle}>Seja criativo(a), crie e remova seus próprios desafios!
        </Text>
        <View style={styles.items}>
          {
            userChallenges.map((item, index) => {
              return (
                    <View key={Math.random()*3} style={styles.item}>
                      <View key={Math.random()*3} style={styles.itemLeft}>
                      <View key={Math.random()*3} style={styles.square}></View>
                      <Text key={Math.random()*3} style={styles.itemText}>{item}</Text>
                    </View>
                    <TouchableOpacity key={index} onPress={()=>handleRemoveChallenges(index)}> 
                      <Text key={Math.random()*3} style={styles.boxRemove}>X</Text>
                    </TouchableOpacity>
                  </View>
                )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeChallengesWrapper}
      >
        <TextInput style={styles.input} placeholder={'Adicione um desafio!'} value={inputBoxValue} onChangeText={text => setInputBoxValue(text)} />
        <TouchableOpacity onPress={() => handleAddChallenges()}>
          <View style={styles.addWrapper}>
            <Icon name='plus' size={20} color='white' ></Icon>      
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  iconGoBack:{
    maxWidth:30,
    marginVertical:-6,
    maxHeight:70
  },
  challengesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AFADAC'
 
  },
  items: {
    marginTop: 30,
  },
  writeChallengesWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#F315EF',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#F80EC8',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  item: { //envolve as tarefas, todas... é aquele espaço branco atrás, um padding
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', //esse justify content tá basicamente
      // empurrando o botão circular para o extremidade oposta
    marginBottom: 20,
  },
  itemLeft: { // as tarefas estarão aqui
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'  // se a tarefa ficar muito grande, ele vai passar pra 
              //proxima linha, flexwrap
  },
  itemText: {
    maxWidth: '80%', // se caso não colocar isso, ele empurra o x para fora da tela 
  },
  square: { // a bolinha ali
    width: 24,
    height: 24,
    backgroundColor: '#ff09de',
    // opacity: 0.4,   // era um azul bem forte, mas alterou com a opacidade, teste dps.
    borderRadius: 25,    // isso fez o quadrado ficar mais um pouco redondo rsrs teste ao extremo dps
    marginRight: 15, // aqui afastou mais o item de texto para a direita 
  },
  boxRemove:{
    fontSize:25,
    textAlign:'center',
    color:'#F80EC8',}
});