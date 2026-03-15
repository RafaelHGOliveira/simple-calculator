import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

const BUTTONS = [
  ['C', '⌫', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['+/-', '0', '.', '='],
];

export default function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op) => {
    const current = parseFloat(display);
    if (previousValue !== null && !waitingForNewValue) {
      const result = calculate(previousValue, current, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    } else {
      setPreviousValue(current);
    }
    setOperator(op);
    setWaitingForNewValue(true);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEqual = () => {
    if (previousValue === null || operator === null) return;
    const current = parseFloat(display);
    const result = calculate(previousValue, current, operator);
    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handlePercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const handleToggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const handleDot = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handlePress = (value) => {
    switch (value) {
      case 'C': return handleClear();
      case '⌫': return handleBackspace();
      case '+/-': return handleToggleSign();
      case '%': return handlePercent();
      case '=': return handleEqual();
      case '.': return handleDot();
      case '+': case '-': case '×': case '÷': return handleOperator(value);
      default: return handleNumber(value);
    }
  };

  const getButtonStyle = (btn) => {
    if (btn === '=') return styles.btnEqual;
    if (['+', '-', '×', '÷'].includes(btn)) return styles.btnOperator;
    if (['C', '⌫', '%'].includes(btn)) return styles.btnFunction;
    return styles.btnNumber;
  };

  const getTextStyle = (btn) => {
    if (btn === '=') return styles.textWhite;
    if (['+', '-', '×', '÷'].includes(btn)) return styles.textGreen;
    if (['C'].includes(btn)) return styles.textRed;
    if (['⌫', '%'].includes(btn)) return styles.textGreen;
    return styles.textDefault;
  };

  return (
    <View style={styles.outerContainer}>
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
        <Text style={styles.expression}>
          {previousValue !== null ? `${previousValue} ${operator || ''}` : ''}
        </Text>
        <Text style={styles.display} numberOfLines={1} adjustsFontSizeToFit>
          {display}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.buttons}>
        {BUTTONS.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[styles.btn, getButtonStyle(btn)]}
                onPress={() => handlePress(btn)}
                activeOpacity={0.6}
              >
                <Text style={[styles.btnText, getTextStyle(btn)]}>
                  {btn}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    ...(Platform.OS === 'web' ? { width: 390, height: 844, borderRadius: 40, overflow: 'hidden' } : { flex: 1 }),
    backgroundColor: '#1c1c1e',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  expression: {
    color: '#666',
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 8,
  },
  display: {
    color: '#fff',
    fontSize: 64,
    fontWeight: '300',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  buttons: {
    paddingHorizontal: 8,
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  btn: {
    width: 78,
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNumber: {
    backgroundColor: '#2c2c2e',
  },
  btnFunction: {
    backgroundColor: '#2c2c2e',
  },
  btnOperator: {
    backgroundColor: '#2c2c2e',
  },
  btnEqual: {
    backgroundColor: '#4CAF50',
  },
  btnText: {
    fontSize: 24,
    fontWeight: '400',
  },
  textDefault: {
    color: '#fff',
  },
  textGreen: {
    color: '#4CAF50',
  },
  textRed: {
    color: '#f44336',
  },
  textWhite: {
    color: '#fff',
    fontWeight: '600',
  },
});
