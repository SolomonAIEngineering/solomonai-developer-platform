"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvPreview = void 0;
const react_1 = __importStar(require("react"));
const papaparse_1 = require("papaparse");
const card_1 = require("../card");
const table_1 = require("../table");
const CsvPreview = ({ fileUrl }) => {
    const [data, setData] = (0, react_1.useState)([]);
    const [error, setError] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fileUrl);
                const reader = response.body?.getReader();
                const result = await reader?.read(); // read all content
                const decoder = new TextDecoder("utf-8");
                const csv = decoder.decode(result?.value); // convert Uint8Array to string
                (0, papaparse_1.parse)(csv, {
                    complete: (results) => {
                        setData(results.data);
                    },
                    header: true,
                    skipEmptyLines: true,
                    transformHeader: (header) => header.trim(),
                    preview: 30,
                    error: (err) => setError(err.message),
                });
            }
            catch (err) {
                setError("Failed to load CSV data");
            }
        };
        fetchData();
    }, [fileUrl]);
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!data.length) {
        return <div>Loading...</div>;
    }
    return (<card_1.Card className="overflow-scroll rounded-2xl">
      <TableHelperComponent data={data}/>
    </card_1.Card>);
};
exports.CsvPreview = CsvPreview;
const TableHelperComponent = ({ data }) => {
    if (!data.length) {
        return <p>No data available.</p>;
    }
    const headers = Object.keys(data[0]);
    return (<table_1.Table className="p-[5%]">
      <table_1.TableCaption>A list of your recent data.</table_1.TableCaption>
      <table_1.TableHeader>
        <table_1.TableRow>
          {headers.map((header, index) => (<table_1.TableHead key={index} className={index === headers.length - 1 ? "text-right" : ""}>
              {header}
            </table_1.TableHead>))}
        </table_1.TableRow>
      </table_1.TableHeader>
      <table_1.TableBody>
        {data.map((row, idx) => (<table_1.TableRow key={idx}>
            {Object.values(row).map((value, i) => (<table_1.TableCell key={i} className={i === headers.length - 1 ? "text-right" : ""}>
                {value}
              </table_1.TableCell>))}
          </table_1.TableRow>))}
      </table_1.TableBody>
    </table_1.Table>);
};
exports.default = exports.CsvPreview;
