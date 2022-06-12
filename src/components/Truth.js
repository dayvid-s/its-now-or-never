import React, {Component} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import InitialPart from './InitialPart';


export default class extends Component  {
  state= {
    ChallenguesDone: ['What would you like to do with a partner if you could erase her memory?'
    ,'eae  man'],
    ChallenguesUndone:['']
  }
  alternar=()=>{
    this.setState({
    ChallenguesDone:['vish']    
})
}
render(){
  return(
        <View style={styles.container} >
            <View style={{height: ('5%')}} > 
              <Text style={styles.lettersOne}  >Dayvid</Text>
              <TouchableOpacity onPress={() => navigation.navigate(InitialPart)}  >
                 <Icon name='left' size={30} color='#ff09de'/>
              </TouchableOpacity>
              <Text style={styles.lettersTwo} >HARD</Text>
          </View>
             <View style={{justifyContent:'space-evenly'}}  >
       
             <View >
               <Text style={styles.lettersThree} 
               >TRUTH
               </Text>    
             </View>
             <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             <View>
               <Text style={{fontSize:28,textAlign:'center'}} >{ this.state.ChallenguesDone} </Text>
            </View>
             <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             </View>
           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View style={{right:20}}  >
                <TouchableOpacity onPress={this.alternar}>
                <Icon name='reload1' size={70} color='#ff09de' />
                </TouchableOpacity>
              </View>
              <View>
                 <Icon name='caretright' size={70} color='#ff09de'/>
              </View>
              <View style={{left:20}}>
                <Icon name='pluscircle' size={70} color='#ff09de' />
              </View>
           </View>
      
        </View>
           
      )}
  }
      const styles = StyleSheet.create({
        container:{
          backgroundColor: (`#000000`),
          height:'100%',
          padding:20,
          justifyContent:'space-between'
          
        },
        lettersOne:{  
            fontSize:30,
            color:('#ff09de'),
            alignSelf:'center',
            
        },
        lettersTwo:{
          fontSize:20,
          color:('#ff66eb'),
          color:('#be2596'),
          fontStyle:('normal'),
          fontWeight:('100'),
          alignSelf:'center'
        },
        lettersThree:{
          fontSize:40,
          color:('#ff09de'),
          alignSelf:'center',
          
      
      }
      });