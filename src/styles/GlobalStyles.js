import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const placeholerColor = "#9E9898";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: 0.3,
    width: '100%',
    backgroundColor: Colors.gray,
    opacity: 0.8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    paddingBottom: 200,
  },
  contentContainerStyle2: {
    paddingBottom: 100,
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 18,
    fontSize: "50px",
    fontWeight: "bold",
    padding: 12,
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  background: {
    backgroundColor: "#0D1A26",
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },
  input: {
    color: "#9E9898",
    borderRadius: 10,
    height: 48,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    fontSize: 16,
  },
  montHeadline: {
    fontSize: 14,
    lineHeight: 22,
  },
  boldHeadline: {
    fontSize: 20,
    lineHeight: 32,
  },
  smallboldHeadline: {
    fontSize: 17,
    lineHeight: 19,
  },
  semiBoldHeadline: {
    fontSize: 15,
    lineHeight: 24,
    color: "black",
  },
  bigHeadline: {
    fontSize: 20,
    lineHeight: 32,
    color: "black",
  },

  normalHeadline: {
    fontSize: 15,
    lineHeight: 24,
    color: "black",
  },
  status: {
    ready: {
      color: "#F9D144",
    },
    dispatched: {
      color: "#4BCBEB",
    },
    delivered: {
      color: "#1BCFB4"
    },

  },
  complaintStatus: {
    RESOLVED: {
      color: "#1BCFB4",
    },
    PENDING: {
      color: "#F9D144"
    }
  },

  price: {
    fontSize: 13,
    color: "#BA2B20",
  }
});

export default GlobalStyles;
