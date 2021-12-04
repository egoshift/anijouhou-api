import { XMLParser } from "fast-xml-parser";

export default function parseXmlToJson(xmlString) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    allowBooleanAttributes: true,
    textNodeName: 'text',
  })

  return parser.parse(xmlString)
}