import React, {Component} from "react";
import {
  Text, 
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: 'Home',
      PelabuhanAwal : '',
      PelabuhanAkhir : '',
      KelasLayanan : '',
      TanggalMasukPelabuhan: '',
      JamMasukPelabuhan:''
    };
  }
  render(){
    return (
      <ScrollView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor='#039be5'/>
        <View 
        style={styles.headstyle}>
          <Text style={styles.headcont}>
           {this.state.header}
          </Text>
        </View>
        
        <View style={styles.imgcont}>
            <Image
                source={require('./src/image/Kapal.jpg')}
                style={styles.image}
            />
        </View>

        <View
        style={{
            marginTop : 20,
        }}>
        <Text>Pelabuhan Awal :</Text>
            <TextInput
                value={this.state.PelabuhanAwal}
                style={styles.inputtext}
                onChangeText={(value) => this.setState({PelabuhanAwal: value})}
            />
        </View>

        <View
        style={{
            marginTop : 20,
        }}>
        <Text>Pelabuhan Tujuan :</Text>
            <TextInput
                value={this.state.PelabuhanAkhir}
                style={styles.inputtext}
                onChangeText={(value) => this.setState({PelabuhanAkhir: value})}
            />
        </View>

        <View
        style={{
            marginTop : 20,
        }}>
        <Text>Kelas Layanan :</Text>
            <TextInput
                value={this.state.KelasLayanan}
                style={styles.inputtext}
                onChangeText={(value) => this.setState({KelasLayanan: value})}
            />
        </View>

         <View
        style={{
            marginTop : 20,
        }}>
        <Text>TanggalMasukPelabuhan :</Text>
            <TextInput
                value={this.state.TanggalMasukPelabuhan}
                style={styles.inputtext}
                onChangeText={(value) => this.setState({TanggalMasukPelabuhan: value})}
            />
        </View>

         <View
        style={{
            marginTop : 20,
        }}>
        <Text>Jam Masuk Pelabuhan :</Text>
            <TextInput
                value={this.state.JamMasukPelabuhan}
                style={styles.inputtext}
                onChangeText={(value) => this.setState({JamMasukPelabuhan: value})}
            />
        </View>
        

        <TouchableOpacity 
        style={styles.button}
        onPress= {() => 
            Alert.alert('Peringatan','Memproses pesanan anda', [
            {
                text: 'Ya',
                onPress: () => console.log ('Ya ditekan'),
                },
            {
                text: 'Cancel',
                onPress: () => console.log ('Cancel ditekan'),

                },
        ])
        }>
            <Text>
            Pesan
            </Text>
        </TouchableOpacity>
      </ScrollView>
   );
  }
}

const styles = StyleSheet.create({
    headstyle:{
        backgroundColor:'#84ffff',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headcont:{
        fontWeight:'bold', fontsize: 20
    },
    button: {
        backgroundColor: '#00c853',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 50,
        marginHorizontal : 125,
        borderRadius: 50,
        elevation: 5,
    },
    inputtext: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#bdbdbd',
    },
    image: { 
        height: 300, width: 300
    },
    imgcont: {
        justifyContent: 'center', alignItems:'center',marginTop: 20
    }
});

export default App;