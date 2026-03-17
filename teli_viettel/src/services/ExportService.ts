import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';
import type { IChatHistoryItem } from '../models/types';

export class ExportService {
  public static async exportToWord(content: IChatHistoryItem['editorContent']) {
    if (!content) return;

    const sections = content.sections.map(section => {
      const children: any[] = [];

      // Section Title
      children.push(
        new Paragraph({
          text: section.title,
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        })
      );

      // Section List
      if (section.list) {
        section.list.forEach(item => {
          const lines = item.split('\n');
          const paragraphChildren: TextRun[] = [];

          lines.forEach((line, lineIdx) => {
            // Xử lý markdown bold **text** trong từng dòng
            const parts = line.split(/(\*\*.*?\*\*)/g);
            parts.forEach(part => {
              if (part.startsWith('**') && part.endsWith('**')) {
                paragraphChildren.push(new TextRun({
                  text: part.slice(2, -2),
                  bold: true,
                  break: lineIdx > 0 && part === parts[0] ? 1 : undefined
                }));
              } else {
                paragraphChildren.push(new TextRun({
                  text: part,
                  break: lineIdx > 0 && part === parts[0] ? 1 : undefined
                }));
              }
            });
          });

          children.push(
            new Paragraph({
              children: paragraphChildren,
              bullet: lines.length > 1 ? undefined : { level: 0 }, // Không dùng bullet nếu là trắc nghiệm nhiều dòng
              spacing: { after: 120 },
            })
          );
        });
      }

      // Section Table
      if (section.table) {
        const tableRows = [
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({ 
                    children: [new TextRun({ text: "HOẠT ĐỘNG CỦA GIÁO VIÊN", bold: true })], 
                    alignment: AlignmentType.CENTER 
                  })
                ],
                width: { size: 60, type: WidthType.PERCENTAGE },
                shading: { fill: "F2F2F2" },
              }),
              new TableCell({
                children: [
                  new Paragraph({ 
                    children: [new TextRun({ text: "HOẠT ĐỘNG CỦA HỌC SINH", bold: true })], 
                    alignment: AlignmentType.CENTER 
                  })
                ],
                width: { size: 40, type: WidthType.PERCENTAGE },
                shading: { fill: "F2F2F2" },
              }),
            ],
          }),
        ];

        section.table.forEach(row => {
          const createParagraphsFromText = (text: string) => {
            const lines = text.split('\n');
            return lines.map(line => new Paragraph({
              children: [new TextRun(line)],
              spacing: { after: 60 }
            }));
          };

          tableRows.push(
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({ 
                      children: [new TextRun({ text: row.leftBold, bold: true })], 
                      spacing: { after: 100 } 
                    }),
                    ...row.leftList.flatMap(li => createParagraphsFromText(li))
                  ],
                }),
                new TableCell({
                  children: row.rightList.flatMap(ri => createParagraphsFromText(ri)),
                }),
              ],
            })
          );
        });

        children.push(
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: tableRows,
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            }
          })
        );
      }

      return { children };
    });

    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: content.title,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 },
          }),
          ...sections.flatMap(s => s.children)
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${content.title.replace(/[:\\/*?"<>|]/g, '')}.docx`);
  }
}
