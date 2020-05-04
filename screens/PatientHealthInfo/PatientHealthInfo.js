import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import DmzHeader from '../../newComponents/organisms/DmzHeader/DmzHeader';
import Container from '../../newComponents/organisms/Container/Container';
import DmzText from '../../newComponents/atoms/DmzText/DmzText';
import SubSupScriptText from '../../newComponents/atoms/SubSupScriptText/SubSupScriptText';
import CardInRow from '../../newComponents/molecules/CardInRow/CardInRow';
import Card from '../../newComponents/atoms/Card/Card';
export default function PatientHealthInfo() {
  return (
    <View>
      <DmzHeader />
      <Container
        style={{
          height: '75%',
          transform: [{translateY: -40}],
          zIndex: 999,
          padding: 20,
        }}>
        <View style={Styles.ChartContainer}>
          <View style={Styles.ChartLegend}>
            <DmzText
              text={'Heart Rate'}
              style={{fontSize: 18, color: '#fff'}}
            />
            <DmzText text={'180'} style={{fontSize: 18, color: '#2FCAAF'}}>
              <SubSupScriptText
                text="bmp"
                type="sub"
                style={{fontSize: 12, color: '#2FCAAF'}}
              />
            </DmzText>
          </View>
          <LineChart
            withShadow={false}
            withHorizontalLabels={false}
            withVerticalLabels={false}
            withInnerLines={false}
            withOuterLines={false}
            data={{
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.8}
            height={220}
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255,255,255,0.7)`,
              backgroundGradientFrom: '#025EC3',
              backgroundGradientTo: '#025EC3',
              strokeWidth: 2,
            }}
            withDots={false}
            style={{marginTop: 10}}
          />
        </View>
        <CardInRow style={{marginTop: 10}}>
          <Card>
            <DmzText
              text="Blood Pressure"
              style={{fontWeight: 'bold', color: '#999', fontSize: 18}}
            />
            <DmzText
              text="120/89"
              style={{fontWeight: 'bold', color: '#025EC3', fontSize: 18}}>
              <SubSupScriptText
                text="mm/Hg"
                type="sub"
                style={{fontSize: 14, color: '#aaa'}}
              />
            </DmzText>
          </Card>
          <Card>
            <DmzText
              text="Temperature"
              style={{fontWeight: 'bold', color: '#999', fontSize: 18}}
            />
            <DmzText
              text="96.6"
              style={{fontWeight: 'bold', color: '#025EC3', fontSize: 18}}>
              <SubSupScriptText
                text="o"
                style={{fontSize: 14, color: '#025EC3', fontWeight: '400'}}
              />
              <DmzText
                text="F"
                style={{fontWeight: 'bold', color: '#025EC3', fontSize: 18}}
              />
            </DmzText>
          </Card>
        </CardInRow>
        <CardInRow>
          <Card>
            <DmzText
              text="Respiration"
              style={{fontWeight: 'bold', color: '#999', fontSize: 18}}
            />
            <DmzText
              text="16"
              style={{fontWeight: 'bold', color: '#025EC3', fontSize: 18}}>
              <SubSupScriptText
                text="rpm"
                type="sub"
                style={{fontSize: 14, color: '#aaa'}}
              />
            </DmzText>
          </Card>
          <Card>
            <DmzText
              text="Oxygen Sat."
              style={{fontWeight: 'bold', color: '#999', fontSize: 18}}
            />
            <DmzText
              text="99%"
              style={{fontWeight: 'bold', color: '#2FCAAF', fontSize: 18}}>
              <SubSupScriptText
                text="o"
                style={{fontSize: 14, color: '#2FCAAF', fontWeight: '400'}}
              />
            </DmzText>
          </Card>
        </CardInRow>
      </Container>
    </View>
  );
}

const Styles = StyleSheet.create({
  ChartContainer: {
    backgroundColor: '#025EC3',
    padding: 5,
  },
  ChartLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
