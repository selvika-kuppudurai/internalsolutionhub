import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BpRadio } from '../RadioButton';
import addNewIcon from '../../assets/icon-add-new-project.png';
import sample from '../../assets/sample.png';
import _ from 'lodash';
import { Select, Table } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import { FormControl, FormControlLabel, RadioGroup, MenuItem, ListItemText, OutlinedInput, } from '@mui/material';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 100,
        },
    },
};

const Home = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [ALL_ENTITY, setAllEntity] = useState("");
    const [entity, setEntity] = useState([]);
    const dropdownRefEntity = useRef(null);
    const [isOpenEntity, setIsOpenEntity] = useState(false);
    const [hoveredEntity, setIsHoveredEntity] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRefEntity = useRef(null);
    const [status, setStatus] = useState("Al");
    const [sortType, setSortType] = useState("Sort By");

    const sortingOptions = ["Sort By", "Ascending", "Descending"]

    const entites = [
        { value: "BET", label: "BET" },
        { value: "CTECH", label: "CTECH" },
        { value: "C&D", label: "C&D" },
        { value: "M&R", label: "M&R" },
        { value: "Fabric COE", label: "Fabric COE" },
        { value: "Growth", label: "Growth" },
    ]

    const ownSolutions = [
        {
            id: 1,
            title: "Demo Title 1",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        },
        {
            id: 2,
            title: "Demo Title 2",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        }
    ];

    const allSolutions = [
        {
            id: 1,
            title: "PRM",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        },
        {
            id: 2,
            title: "InsightLens - Market Share Soultion",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        },
        {
            id: 3,
            title: "Fabric - Creator Economy",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        },
        {
            id: 4,
            title: "InsightLens - Sales Executive Summary",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        },
        {
            id: 5,
            title: "InsightLens - DigiLending FS Solution",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        },
        {
            id: 6,
            title: "Fabric - Credit Card Analysis",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        },
        {
            id: 7,
            title: "InsightLens - Subscription Analytics",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            image: sample,
        }
    ];

    useEffect(() => {
        setAllEntity(entites);
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefEntity.current && !dropdownRefEntity.current.contains(event.target)) {
                setIsOpenEntity(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);

    let isAllSelected = []

    const handleGenericSelect = (
        option,
        allOptions,
        selected,
        setSelected,
        additionalSetter = null
    ) => {


        isAllSelected = selected.length === allOptions.length;

        if (option.value === "All") {
            if (isAllSelected) {
                setSelected([]);
                if (additionalSetter) additionalSetter([]);
            } else {
                const allLabels = allOptions.map((item) => item.label);
                setSelected(allLabels);
                if (additionalSetter) additionalSetter(allLabels);
            }
        } else {

            let newSelected = selected.includes(option.label)
                ? selected.filter((item) => item !== option.label)
                : [...selected, option.label];
            if (newSelected.length === allOptions.length) {
                setSelected(newSelected);
                if (additionalSetter) additionalSetter(newSelected);
            } else {
                const filtered = newSelected.filter((item) => item.value !== "All");
                setSelected(filtered);
                if (additionalSetter) additionalSetter(filtered);
            }
        }
    };

    return (
        <>
            <div className='container-fluid ' style={{ marginTop: '50px', marginBottom: '20px' }}>
                <div className='row' style={{ background: '#e8eef6', marginTop: '5px' }}>
                    <div className='col-md-4' style={{ padding: '8px 1rem' }}>
                        <input
                            type="text"
                            placeholder="Search Solution"
                            onChange={(e) => setSearchText(e.target.value)}
                            value={searchText}
                            style={{
                                width: '60%',
                                padding: '8px 15px',
                                borderRadius: '3rem',
                                border: '1px solid #ccc',
                                fontSize: '13px',
                            }}
                        />
                    </div>
                    <div className='col-md-5 d-flex justify-content-end' style={{ padding: '8px 0' }}>
                        <div ref={dropdownRefEntity} style={{ position: "relative", width: "40%" }}>
                            <div
                                onClick={() => setIsOpenEntity(true)}
                                onMouseEnter={() => setIsHoveredEntity(true)}
                                onMouseLeave={() => setIsHoveredEntity(false)}
                                style={{
                                    borderColor: `${isOpenEntity ? " #2684FF" : hoveredEntity ? " #2684FF" : " #dee2e6"}`,
                                    boxShadow: `${isOpenEntity ? " 0 0 0 1px #2684FF" : hoveredEntity ? "  0 0 0 1px #2684FF" : ""}`,
                                }}
                                className="dropdown-container"
                            >
                                <input
                                    type="text"
                                    ref={inputRefEntity}
                                    className="inputstyle"
                                    value={searchTerm}
                                    // value=""
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpenEntity(true);
                                        inputRefEntity.current?.focus();
                                    }}
                                    placeholder={
                                        entity.length === 0
                                            ? "Select Entity/Horizontal"
                                            : entity.length === 1
                                                ? ALL_ENTITY.find((p) => p.value === entity[0])?.label
                                                : "Multi Selection"
                                    }
                                />
                                <span className="DropdownIcon">▼</span>
                            </div>

                            {isOpenEntity && (
                                <div className="dropdownMenu">
                                    {[{ label: "All", value: "All" }, ...ALL_ENTITY]
                                        .filter((opt) =>
                                            (opt.label || "").toLowerCase().includes((searchTerm || "").toLowerCase())
                                        )

                                        .map((opt) => {
                                            const isAllOption = opt.value === "All";
                                            const isChecked =
                                                isAllOption ? entity.length === ALL_ENTITY.length : entity.includes(opt.value);
                                            const isIndeterminate =
                                                isAllOption &&
                                                entity.length > 0 &&
                                                entity.length < ALL_ENTITY.length;

                                            return (
                                                <label
                                                    key={opt.value}
                                                    className="labeldesign"
                                                    style={{
                                                        backgroundColor: isChecked ? "#f5f5f5" : "transparent",
                                                        fontWeight: isAllOption ? "bold" : "normal",

                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        ref={(el) => {
                                                            if (el && isAllOption) {
                                                                el.indeterminate = isIndeterminate;
                                                            }
                                                        }}
                                                        onChange={() => {
                                                            handleGenericSelect(opt, ALL_ENTITY, entity, setEntity);
                                                            setSearchTerm("");
                                                            setTimeout(() => inputRefEntity.current?.focus(), 0);
                                                        }}
                                                        style={{ marginRight: "8px" }}
                                                    />
                                                    {opt.value}
                                                </label>
                                            );
                                        })}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-md-3 d-flex justify-content-start align-items-center' style={{ padding: '8px' }}>
                        <button className="btn-style mx-1" onClick={() => navigate("/add-new-soluation")}>
                            <img src={addNewIcon} className={"icons-style"} />
                            <span className={"buttonLabel"}>Add New Solution</span>
                        </button>
                        <button className="btn-style mx-1">
                            <span className={"buttonLabel"}>Approve / Reject</span>
                        </button>
                    </div>
                </div>

                <div className='row px-3'>
                    <div className='col' style={{ textAlign: 'left', marginTop: "0.5rem" }}>
                        <span style={{ fontSize: '14px', color: '#0057B7' }}>Solutions you have shared</span>
                    </div>
                </div>

                <div className="container-fluid px-4">
                    <div className="row gx-2 gy-2" style={{ marginTop: "0.5rem" }}>
                        {ownSolutions.map((item, index) => (
                            <div
                                key={item.id}
                                className="col-lg-4 col-md-6 col-sm-12"
                            >
                                <div
                                    className="card h-100"
                                    style={{
                                        background: '#F5F9FF',
                                        borderColor: '#D1E3FF',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderRadius: '6px',
                                        padding: '1rem',
                                    }}
                                >
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td rowSpan={3} style={{ verticalAlign: 'top' }}>
                                                    <img
                                                        src={item.image}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        style={{ cursor: 'pointer', maxWidth: '70px' }}
                                                    />
                                                </td>
                                                <td style={{
                                                    fontSize: '14px',
                                                    textAlign: 'left',
                                                    paddingLeft: '1rem',
                                                    color: '#1A73E8',
                                                    fontWeight: '600'
                                                }}>
                                                    {item.title}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{
                                                    fontSize: '11px',
                                                    textAlign: 'left',
                                                    paddingLeft: '1rem'
                                                }}>
                                                    {item.description}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="d-flex justify-content-end pt-3">
                                                    <button className="btn-style mx-1 d-flex align-items-center justify-content-center" style={{ width: '5rem' }}>
                                                        <FontAwesomeIcon icon={faPencilAlt} />
                                                        <span className="buttonLabelCard">Edit</span>
                                                    </button>
                                                    <button
                                                        className="btn-style mx-1 d-flex align-items-center justify-content-center"
                                                        style={{ width: '5rem' }}
                                                    >
                                                        <FontAwesomeIcon icon={faEye} />
                                                        <span className="buttonLabelCard">View</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container-fluid row'>
                    <div className='col-md-3 col-sm-12' style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '14px', color: '#0057B7' }}>Solutions</span>
                    </div>

                    <div className="col-md-9 col-sm-12 d-flex align-items-center justify-content-end flex-wrap" style={{ paddingRight: '0'}}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                name="row-radio-buttons-group"
                                defaultValue="All"
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <FormControlLabel
                                    value="All"
                                    control={<BpRadio />}
                                    label={<span style={{ fontSize: '13px' }}>All</span>}
                                />
                                <FormControlLabel
                                    value="Approved"
                                    control={<BpRadio />}
                                    label={<span style={{ fontSize: '13px' }}>Approved</span>}
                                />
                                <FormControlLabel
                                    value="Pending for Approval"
                                    control={<BpRadio />}
                                    label={<span style={{ fontSize: '13px' }}>Pending for Approval</span>}
                                />
                                <FormControlLabel
                                    value="Rejected"
                                    control={<BpRadio />}
                                    label={<span style={{ fontSize: '13px' }}>Rejected</span>}
                                />
                            </RadioGroup>
                        </FormControl>

                        <FormControl size="small" style={{ minWidth: 130 }}>
                            <Select
                                displayEmpty
                                value={sortType}
                                onChange={(event) => setSortType(event.target.value)}
                                input={<OutlinedInput />}
                                MenuProps={MenuProps}
                                sx={{
                                    height: '25px',
                                    fontSize: '12px',
                                    lineHeight: '1.2',
                                    '.MuiSelect-select': {
                                        padding: '4px 8px',
                                        fontSize: '12px',
                                        lineHeight: '1.2',
                                    },
                                    '.MuiOutlinedInput-notchedOutline': {
                                        padding: 0,
                                    },
                                }}
                            >
                                {_.map(sortingOptions, (d, i) => (
                                    <MenuItem
                                        key={d + i}
                                        value={d}
                                        sx={{
                                            fontSize: '12px',
                                            minHeight: '32px',
                                            lineHeight: '1.2',
                                            paddingY: '4px',
                                        }}
                                    >
                                        <ListItemText
                                            primary={d}
                                            primaryTypographyProps={{ fontSize: '12px', lineHeight: '1.2' }}
                                        />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="container-fluid px-4 mb-1" style={{ height: '300px',overflowX: 'hidden', overflowY: 'auto'}}>
                    <div className="row gx-2 gy-2">
                        {allSolutions.map((item, index) => (
                            <div
                                key={item.id}
                                className="col-lg-4 col-md-6 col-sm-12"
                            >
                                <div
                                    className="card h-100"
                                    style={{
                                        background: '#F5F9FF',
                                        borderColor: '#D1E3FF',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderRadius: '6px',
                                        padding: '1rem',
                                    }}
                                >
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td rowSpan={3} style={{ verticalAlign: 'top' }}>
                                                    <img
                                                        src={item.image}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        style={{ cursor: 'pointer', maxWidth: '70px' }}
                                                    />
                                                </td>
                                                <td style={{
                                                    fontSize: '14px',
                                                    textAlign: 'left',
                                                    paddingLeft: '1rem',
                                                    color: '#1A73E8',
                                                    fontWeight: '600'
                                                }}>
                                                    {item.title}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{
                                                    fontSize: '11px',
                                                    textAlign: 'left',
                                                    paddingLeft: '1rem'
                                                }}>
                                                    {item.description}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="d-flex justify-content-end pt-3">
                                                    <button className="btn-style mx-1 d-flex align-items-center justify-content-center" style={{ width: '5rem' }}>
                                                        <span className="buttonLabelCard">More</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home