import React from "react";
import { Document, Page, Text, StyleSheet, Font ,View} from "@react-pdf/renderer";

Font.register({
  family: "Roboto,SourceHanSansCN",
  fonts: [
    {
      src: "/fonts/SourceHanSansCN-Regular.otf",
    },
    {
      src: "/fonts/Roboto-Regular.ttf",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
  },
  horizontalRule: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  section: {
    fontSize: 12,
    fontFamily: "Roboto,SourceHanSansCN",
    marginVertical: 10,
    lineHeight: 1.5,
  },
});

// NOTE: This should only ever be imported dynamically to reduce load times
const MyDocument: React.FC<{
  textSections: string[];
}> = ({ textSections }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {textSections.map((text) => (
        <>
          <Text style={styles.section}>{text}</Text>
          <HorizontalRule />
        </>
      ))}
    </Page>
  </Document>
);

const HorizontalRule: React.FC = () => <View style={styles.horizontalRule} />;

export default MyDocument;
