import React, { useState, useRef } from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../input/MyInput';
import MessageGenerator from '../messageGenerator/MessageGenerator';
import styles from './AnketaBody.module.css'
import ChildAge from './childAge/ChildAge';
import WhoNeedHelp from './whoNeedHelp/WhoNeedHelp';
import AdultOptions from './adultOptions/AdultOptions';
import ChildOptions from './childOptions/ChildOptions';
import SMSForm from '../SMSForm/SMSForm';
import TeenagerOptions from './teenagerOptions/TeenagerOptions';

const AnketaBody = () => {

    let [guestChoise, setGuestChoise] = useState('');
    let [guestPhone, setGuestPhone] = useState('');
    let [guestName, setGuestName] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref0_4 = useRef(null);
    const ref6_8 = useRef(null);
    const ref12_16 = useRef(null);
    const refBaby = useRef(null);
    const refChild = useRef(null);
    const refTeenager = useRef(null);
    const refPanicBtn = useRef(null);
    const refPsichosomatBtn = useRef(null);
    const refFamilyBtn = useRef(null);
    const refDependsBtn = useRef(null);
    const refFobBtn = useRef(null);
    const refPostTravmatBtn = useRef(null);
    const refPanic = useRef(null);
    const refPsichosomat = useRef(null);
    const refFamily = useRef(null);
    const refDepends = useRef(null);
    const refFob = useRef(null);
    const refPostTravmat = useRef(null);
    const refChildPanic = useRef(null);
    const refChildPsichosomat = useRef(null);
    const refChildDepends = useRef(null);
    const refChildFob = useRef(null);
    const refChildPostTravmat = useRef(null);
    const refChildPanicBtn = useRef(null);
    const refChildPsichosomatBtn = useRef(null);
    const refChildDependsBtn = useRef(null);
    const refChildFobBtn = useRef(null);
    const refChildPostTravmatBtn = useRef(null);
    const refTeenagerCryzis = useRef(null);
    const refTeenagerNevrot = useRef(null);
    const refTeenagerPsyco = useRef(null);
    const refTeenagerPovedinka = useRef(null);
    const refTeenagerEducation = useRef(null);
    const refTeenagerIdentification = useRef(null);
    const refTeenagerCryzisBtn = useRef(null);
    const refTeenagerNevrotBtn = useRef(null);
    const refTeenagerPsycoBtn = useRef(null);
    const refTeenagerPovedinkaBtn = useRef(null);
    const refTeenagerEducationBtn = useRef(null);
    const refTeenagerIdentificationBtn = useRef(null);



    function addGuestChoise(value) {
        if (value === `adultMen`) {
            setGuestChoise(
                guestChoise = 'Взрослому'
            )
            ref1.current.style.opacity = '1'
            ref2.current.style.opacity = '.1'
            ref3.current.style.opacity = '.1'
            ref4.current.style.display = 'inline'
            ref5.current.style.display = 'none'
            ref6.current.style.display = 'none'
            ref0_4.current.style.display = 'none'
            ref6_8.current.style.display = 'none'
            ref12_16.current.style.display = 'none'
            refBaby.current.style.display = 'none'
            refChild.current.style.display = 'none'
            refTeenager.current.style.display = 'none'
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'
            refTeenagerCryzisBtn.current.style.display = 'none'
            refTeenagerNevrotBtn.current.style.display = 'none'
            refTeenagerPsycoBtn.current.style.display = 'none'
            refTeenagerPovedinkaBtn.current.style.display = 'none'
            refTeenagerEducationBtn.current.style.display = 'none'
            refTeenagerIdentificationBtn.current.style.display = 'none'

            refPanicBtn.current.style.display = 'block'
            refPsichosomatBtn.current.style.display = 'block'
            refFamilyBtn.current.style.display = 'block'
            refDependsBtn.current.style.display = 'block'
            refFobBtn.current.style.display = 'block'
            refPostTravmatBtn.current.style.display = 'block'

            refPanic.current.style.display = 'block'
            refPsichosomat.current.style.display = 'block'
            refFamily.current.style.display = 'block'
            refDepends.current.style.display = 'block'
            refFob.current.style.display = 'block'
            refPostTravmat.current.style.display = 'block'

            refChildPanic.current.style.display = 'none'
            refChildPsichosomat.current.style.display = 'none'
            refChildDepends.current.style.display = 'none'
            refChildFob.current.style.display = 'none'
            refChildPostTravmat.current.style.display = 'none'

            refChildPanicBtn.current.style.display = 'none'
            refChildPsichosomatBtn.current.style.display = 'none'
            refChildDependsBtn.current.style.display = 'none'
            refChildFobBtn.current.style.display = 'none'
            refChildPostTravmatBtn.current.style.display = 'none'
        }
        else if (value === `child`) {
            setGuestChoise(
                guestChoise = 'ребенку'
            )
            ref1.current.style.opacity = '.1'
            ref2.current.style.opacity = '1'
            ref3.current.style.opacity = '.1'
            ref4.current.style.display = 'none'
            ref5.current.style.display = 'inline'
            ref6.current.style.display = 'none'
            ref0_4.current.style.display = 'block'
            ref6_8.current.style.display = 'block'
            ref12_16.current.style.display = 'block'
            refBaby.current.style.display = 'block'
            refChild.current.style.display = 'block'

            refPanicBtn.current.style.display = 'none'
            refPsichosomatBtn.current.style.display = 'none'
            refFamilyBtn.current.style.display = 'none'
            refDependsBtn.current.style.display = 'none'
            refFobBtn.current.style.display = 'none'
            refPostTravmatBtn.current.style.display = 'none'

            refPanic.current.style.display = 'none'
            refPsichosomat.current.style.display = 'none'
            refFamily.current.style.display = 'none'
            refDepends.current.style.display = 'none'
            refFob.current.style.display = 'none'
            refPostTravmat.current.style.display = 'none'

            refChildPanic.current.style.display = 'block'
            refChildPsichosomat.current.style.display = 'block'
            refChildDepends.current.style.display = 'block'
            refChildFob.current.style.display = 'block'
            refChildPostTravmat.current.style.display = 'block'

            refChildPanicBtn.current.style.display = 'block'
            refChildPsichosomatBtn.current.style.display = 'block'
            refChildDependsBtn.current.style.display = 'block'
            refChildFobBtn.current.style.display = 'block'
            refChildPostTravmatBtn.current.style.display = 'block'
        }
        else if (value === 'friend') {
            setGuestChoise(
                guestChoise = `другу`
            )
            ref1.current.style.opacity = '.1'
            ref2.current.style.opacity = '.1'
            ref3.current.style.opacity = '1'
            ref4.current.style.display = 'none'
            ref5.current.style.display = 'none'
            ref6.current.style.display = 'inline'
            ref0_4.current.style.display = 'none'
            ref6_8.current.style.display = 'none'
            ref12_16.current.style.display = 'none'
            refBaby.current.style.display = 'none'
            refChild.current.style.display = 'none'
            refTeenager.current.style.display = 'none'
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'
            refTeenagerCryzisBtn.current.style.display = 'none'
            refTeenagerNevrotBtn.current.style.display = 'none'
            refTeenagerPsycoBtn.current.style.display = 'none'
            refTeenagerPovedinkaBtn.current.style.display = 'none'
            refTeenagerEducationBtn.current.style.display = 'none'
            refTeenagerIdentificationBtn.current.style.display = 'none'

            refPanicBtn.current.style.display = 'block'
            refPsichosomatBtn.current.style.display = 'block'
            refFamilyBtn.current.style.display = 'block'
            refDependsBtn.current.style.display = 'block'
            refFobBtn.current.style.display = 'block'
            refPostTravmatBtn.current.style.display = 'block'

            refPanic.current.style.display = 'block'
            refPsichosomat.current.style.display = 'block'
            refFamily.current.style.display = 'block'
            refDepends.current.style.display = 'block'
            refFob.current.style.display = 'block'
            refPostTravmat.current.style.display = 'block'

            refChildPanic.current.style.display = 'none'
            refChildPsichosomat.current.style.display = 'none'
            refChildDepends.current.style.display = 'none'
            refChildFob.current.style.display = 'none'
            refChildPostTravmat.current.style.display = 'none'

            refChildPanicBtn.current.style.display = 'none'
            refChildPsichosomatBtn.current.style.display = 'none'
            refChildDependsBtn.current.style.display = 'none'
            refChildFobBtn.current.style.display = 'none'
            refChildPostTravmatBtn.current.style.display = 'none'
        }
        else if (value === 'baby') {
            setGuestChoise(
                guestChoise = 'ребенку, которому меньше четырех лет'
            )
            ref0_4.current.style.opacity = '1'
            ref6_8.current.style.opacity = '.1'
            ref12_16.current.style.opacity = '.1'
            refBaby.current.style.display = 'inline'
            refChild.current.style.display = 'none'
            refTeenager.current.style.display = 'none'
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'
            refTeenagerCryzisBtn.current.style.display = 'none'
            refTeenagerNevrotBtn.current.style.display = 'none'
            refTeenagerPsycoBtn.current.style.display = 'none'
            refTeenagerPovedinkaBtn.current.style.display = 'none'
            refTeenagerEducationBtn.current.style.display = 'none'
            refTeenagerIdentificationBtn.current.style.display = 'none'

            refChildPanic.current.style.display = 'inline'
            refChildPsichosomat.current.style.display = 'inline'
            refChildDepends.current.style.display = 'inline'
            refChildFob.current.style.display = 'inline'
            refChildPostTravmat.current.style.display = 'inline'
            refChildPanicBtn.current.style.display = 'inline'
            refChildPsichosomatBtn.current.style.display = 'inline'
            refChildDependsBtn.current.style.display = 'inline'
            refChildFobBtn.current.style.display = 'inline'
            refChildPostTravmatBtn.current.style.display = 'inline'
        }
        else if (value === 'children') {
            setGuestChoise(
                guestChoise = 'ребенку, который учится в младших/средних классах'
            )
            ref0_4.current.style.opacity = '.1'
            ref6_8.current.style.opacity = '1'
            ref12_16.current.style.opacity = '.1'
            refChild.current.style.display = 'inline'
            refBaby.current.style.display = 'none'
            refTeenager.current.style.display = 'none'
            refTeenager.current.style.display = 'none'
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'
            refTeenagerCryzisBtn.current.style.display = 'none'
            refTeenagerNevrotBtn.current.style.display = 'none'
            refTeenagerPsycoBtn.current.style.display = 'none'
            refTeenagerPovedinkaBtn.current.style.display = 'none'
            refTeenagerEducationBtn.current.style.display = 'none'
            refTeenagerIdentificationBtn.current.style.display = 'none'

            refChildPanic.current.style.display = 'inline'
            refChildPsichosomat.current.style.display = 'inline'
            refChildDepends.current.style.display = 'inline'
            refChildFob.current.style.display = 'inline'
            refChildPostTravmat.current.style.display = 'inline'
            refChildPanicBtn.current.style.display = 'inline'
            refChildPsichosomatBtn.current.style.display = 'inline'
            refChildDependsBtn.current.style.display = 'inline'
            refChildFobBtn.current.style.display = 'inline'
            refChildPostTravmatBtn.current.style.display = 'inline'
        }
        else if (value === 'teenager') {
            setGuestChoise(
                guestChoise = 'подростку'
            )
            ref0_4.current.style.opacity = '.1'
            ref6_8.current.style.opacity = '.1'
            ref12_16.current.style.opacity = '1'
            refBaby.current.style.display = 'none'
            refChild.current.style.display = 'none'
            refTeenager.current.style.display = 'inline'
            refTeenagerCryzis.current.style.display = 'inline'
            refTeenagerNevrot.current.style.display = 'inline'
            refTeenagerPsyco.current.style.display = 'inline'
            refTeenagerPovedinka.current.style.display = 'inline'
            refTeenagerEducation.current.style.display = 'inline'
            refTeenagerIdentification.current.style.display = 'inline'
            refTeenagerCryzisBtn.current.style.display = 'inline'
            refTeenagerNevrotBtn.current.style.display = 'inline'
            refTeenagerPsycoBtn.current.style.display = 'inline'
            refTeenagerPovedinkaBtn.current.style.display = 'inline'
            refTeenagerEducationBtn.current.style.display = 'inline'
            refTeenagerIdentificationBtn.current.style.display = 'inline'

            refChildPanic.current.style.display = 'none'
            refChildPsichosomat.current.style.display = 'none'
            refChildDepends.current.style.display = 'none'
            refChildFob.current.style.display = 'none'
            refChildPostTravmat.current.style.display = 'none'
            refChildPanicBtn.current.style.display = 'none'
            refChildPsichosomatBtn.current.style.display = 'none'
            refChildDependsBtn.current.style.display = 'none'
            refChildFobBtn.current.style.display = 'none'
            refChildPostTravmatBtn.current.style.display = 'none'
        }
        else if (value === 'TeenagerCryzisBtn') {
            setGuestChoise(
                guestChoise = 'підлітку з кризовими явищами'
            )
            refTeenagerCryzis.current.style.display = 'inline'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'

            refTeenagerCryzisBtn.current.style.border = '3px solid white'
            refTeenagerNevrotBtn.current.style.border = 'none'
            refTeenagerPsycoBtn.current.style.border = 'none'
            refTeenagerPovedinkaBtn.current.style.border = 'none'
            refTeenagerEducationBtn.current.style.border = 'none'
            refTeenagerIdentificationBtn.current.style.border = 'none'
        }
        else if (value === 'TeenagerNevrotBtn') {
            setGuestChoise(
                guestChoise = 'підлітку з невротичними розладами'
            )
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'inline'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'

            refTeenagerCryzisBtn.current.style.border = 'none'
            refTeenagerNevrotBtn.current.style.border = '3px solid white'
            refTeenagerPsycoBtn.current.style.border = 'none'
            refTeenagerPovedinkaBtn.current.style.border = 'none'
            refTeenagerEducationBtn.current.style.border = 'none'
            refTeenagerIdentificationBtn.current.style.border = 'none'
        }
        else if (value === 'TeenagerPsycoBtn') {
            setGuestChoise(
                guestChoise = 'підлітку з психоемоційними розладами'
            )
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'inline'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'

            refTeenagerCryzisBtn.current.style.border = 'none'
            refTeenagerNevrotBtn.current.style.border = 'none'
            refTeenagerPsycoBtn.current.style.border = '3px solid white'
            refTeenagerPovedinkaBtn.current.style.border = 'none'
            refTeenagerEducationBtn.current.style.border = 'none'
            refTeenagerIdentificationBtn.current.style.border = 'none'
        }
        else if (value === 'TeenagerPovedinkaBtn') {
            setGuestChoise(
                guestChoise = 'підлітку з поведінковими особливостями'
            )
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'inline'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'none'

            refTeenagerCryzisBtn.current.style.border = 'none'
            refTeenagerNevrotBtn.current.style.border = 'none'
            refTeenagerPsycoBtn.current.style.border = 'none'
            refTeenagerPovedinkaBtn.current.style.border = '3px solid white'
            refTeenagerEducationBtn.current.style.border = 'none'
            refTeenagerIdentificationBtn.current.style.border = 'none'
        }
        else if (value === 'TeenagerEducationBtn') {
            setGuestChoise(
                guestChoise = 'підлітку з проблемами у навчанні'
            )
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'inline'
            refTeenagerIdentification.current.style.display = 'none'

            refTeenagerCryzisBtn.current.style.border = 'none'
            refTeenagerNevrotBtn.current.style.border = 'none'
            refTeenagerPsycoBtn.current.style.border = 'none'
            refTeenagerPovedinkaBtn.current.style.border = 'none'
            refTeenagerEducationBtn.current.style.border = '3px solid white'
            refTeenagerIdentificationBtn.current.style.border = 'none'
        }
        else if (value === 'TeenagerIdentificationBtn') {
            setGuestChoise(
                guestChoise = 'підлітку з самовизначенням'
            )
            refTeenagerCryzis.current.style.display = 'none'
            refTeenagerNevrot.current.style.display = 'none'
            refTeenagerPsyco.current.style.display = 'none'
            refTeenagerPovedinka.current.style.display = 'none'
            refTeenagerEducation.current.style.display = 'none'
            refTeenagerIdentification.current.style.display = 'inline'

            refTeenagerCryzisBtn.current.style.border = 'none'
            refTeenagerNevrotBtn.current.style.border = 'none'
            refTeenagerPsycoBtn.current.style.border = 'none'
            refTeenagerPovedinkaBtn.current.style.border = 'none'
            refTeenagerEducationBtn.current.style.border = 'none'
            refTeenagerIdentificationBtn.current.style.border = '3px solid white'
        }
        else if (value === 'panic') {
            setGuestChoise(
                guestChoise = 'взрослому с паническими атаками'
            )
            refPanicBtn.current.style.border = '3px solid white'
            refPsichosomatBtn.current.style.border = 'none'
            refFamilyBtn.current.style.border = 'none'
            refDependsBtn.current.style.border = 'none'
            refFobBtn.current.style.border = 'none'
            refPostTravmatBtn.current.style.border = 'none'

            refPanic.current.style.display = 'block'
            refPsichosomat.current.style.display = 'none'
            refFamily.current.style.display = 'none'
            refDepends.current.style.display = 'none'
            refFob.current.style.display = 'none'
            refPostTravmat.current.style.display = 'none'
        }
        else if (value === 'psichosomat') {
            setGuestChoise(
                guestChoise = 'взрослому с психосоматическими расстройствами'
            )
            refPanicBtn.current.style.border = 'none'
            refPsichosomatBtn.current.style.border = '3px solid white'
            refFamilyBtn.current.style.border = 'none'
            refDependsBtn.current.style.border = 'none'
            refFobBtn.current.style.border = 'none'
            refPostTravmatBtn.current.style.border = 'none'

            refPanic.current.style.display = 'none'
            refPsichosomat.current.style.display = 'block'
            refFamily.current.style.display = 'none'
            refDepends.current.style.display = 'none'
            refFob.current.style.display = 'none'
            refPostTravmat.current.style.display = 'none'
        }
        else if (value === 'family') {
            setGuestChoise(
                guestChoise = 'с семейными проблемами'
            )
            refPanicBtn.current.style.border = 'none'
            refPsichosomatBtn.current.style.border = 'none'
            refFamilyBtn.current.style.border = '3px solid white'
            refDependsBtn.current.style.border = 'none'
            refFobBtn.current.style.border = 'none'
            refPostTravmatBtn.current.style.border = 'none'

            refPanic.current.style.display = 'none'
            refPsichosomat.current.style.display = 'none'
            refFamily.current.style.display = 'block'
            refDepends.current.style.display = 'none'
            refFob.current.style.display = 'none'
            refPostTravmat.current.style.display = 'none'
        }
        else if (value === 'depends') {
            setGuestChoise(
                guestChoise = 'взрослому с зависимостями'
            )
            refPanicBtn.current.style.border = 'none'
            refPsichosomatBtn.current.style.border = 'none'
            refFamilyBtn.current.style.border = 'none'
            refDependsBtn.current.style.border = '3px solid white'
            refFobBtn.current.style.border = 'none'
            refPostTravmatBtn.current.style.border = 'none'

            refPanic.current.style.display = 'none'
            refPsichosomat.current.style.display = 'none'
            refFamily.current.style.display = 'none'
            refDepends.current.style.display = 'block'
            refFob.current.style.display = 'none'
            refPostTravmat.current.style.display = 'none'
        }
        else if (value === 'fob') {
            setGuestChoise(
                guestChoise = 'взрослому с фобиями'
            )
            refPanicBtn.current.style.border = 'none'
            refPsichosomatBtn.current.style.border = 'none'
            refFamilyBtn.current.style.border = 'none'
            refDependsBtn.current.style.border = 'none'
            refFobBtn.current.style.border = '3px solid white'
            refPostTravmatBtn.current.style.border = 'none'

            refPanic.current.style.display = 'none'
            refPsichosomat.current.style.display = 'none'
            refFamily.current.style.display = 'none'
            refDepends.current.style.display = 'none'
            refFob.current.style.display = 'block'
            refPostTravmat.current.style.display = 'none'
        }
        else if (value === 'postTravmat') {
            setGuestChoise(
                guestChoise = 'взрослому с посттравмитическим синдромом'
            )
            refPanicBtn.current.style.border = 'none'
            refPsichosomatBtn.current.style.border = 'none'
            refFamilyBtn.current.style.border = 'none'
            refDependsBtn.current.style.border = 'none'
            refFobBtn.current.style.border = 'none'
            refPostTravmatBtn.current.style.border = '3px solid white'

            refPanic.current.style.display = 'none'
            refPsichosomat.current.style.display = 'none'
            refFamily.current.style.display = 'none'
            refDepends.current.style.display = 'none'
            refFob.current.style.display = 'none'
            refPostTravmat.current.style.display = 'block'
        }
        else if (value === 'childPanic') {
            setGuestChoise(
                guestChoise = 'ребенку с паническими атаками'
            )
            refChildPanic.current.style.display = 'block'
            refChildPsichosomat.current.style.display = 'none'
            refChildDepends.current.style.display = 'none'
            refChildFob.current.style.display = 'none'
            refChildPostTravmat.current.style.display = 'none'

            refChildPanicBtn.current.style.border = '3px solid white'
            refChildPsichosomatBtn.current.style.border = 'none'
            refChildDependsBtn.current.style.border = 'none'
            refChildFobBtn.current.style.border = 'none'
            refChildPostTravmatBtn.current.style.border = 'none'
        }
        else if (value === 'childPsichosomat') {
            setGuestChoise(
                guestChoise = 'ребенку с психсоматическими расстройствами'
            )
            refChildPanic.current.style.display = 'none'
            refChildPsichosomat.current.style.display = 'block'
            refChildDepends.current.style.display = 'none'
            refChildFob.current.style.display = 'none'
            refChildPostTravmat.current.style.display = 'none'

            refChildPanicBtn.current.style.border = 'none'
            refChildPsichosomatBtn.current.style.border = '3px solid white'
            refChildDependsBtn.current.style.border = 'none'
            refChildFobBtn.current.style.border = 'none'
            refChildPostTravmatBtn.current.style.border = 'none'
        }
        else if (value === 'childDepends') {
            setGuestChoise(
                guestChoise = 'с подростковыми зависимостями'
            )
            refChildPanic.current.style.display = 'none'
            refChildPsichosomat.current.style.display = 'none'
            refChildDepends.current.style.display = 'block'
            refChildFob.current.style.display = 'none'
            refChildPostTravmat.current.style.display = 'none'

            refChildPanicBtn.current.style.border = 'none'
            refChildPsichosomatBtn.current.style.border = 'none'
            refChildDependsBtn.current.style.border = '3px solid white'
            refChildFobBtn.current.style.border = 'none'
            refChildPostTravmatBtn.current.style.border = 'none'
        }
        else if (value === 'childFob') {
            setGuestChoise(
                guestChoise = 'с фобиями у ребенка'
            )
            refChildPanic.current.style.display = 'none'
            refChildPsichosomat.current.style.display = 'none'
            refChildDepends.current.style.display = 'none'
            refChildFob.current.style.display = 'block'
            refChildPostTravmat.current.style.display = 'none'

            refChildPanicBtn.current.style.border = 'none'
            refChildPsichosomatBtn.current.style.border = 'none'
            refChildDependsBtn.current.style.border = 'none'
            refChildFobBtn.current.style.border = '3px solid white'
            refChildPostTravmatBtn.current.style.border = 'none'
        }
        else if (value === 'childPostTravmat') {
            setGuestChoise(
                guestChoise = 'с посттравматическим синдромом у ребенка'
            )
            refChildPanic.current.style.display = 'none'
            refChildPsichosomat.current.style.display = 'none'
            refChildDepends.current.style.display = 'none'
            refChildFob.current.style.display = 'none'
            refChildPostTravmat.current.style.display = 'block'

            refChildPanicBtn.current.style.border = 'none'
            refChildPsichosomatBtn.current.style.border = 'none'
            refChildDependsBtn.current.style.border = 'none'
            refChildFobBtn.current.style.border = 'none'
            refChildPostTravmatBtn.current.style.border = '3px solid white'
        }
    }

    const addGuestName = () => {
        setGuestName(
            guestName = name
        )
        setName('')
    }
    const addGuestPhone = () => {
        setGuestPhone(
            guestPhone = phone
        )
        setPhone('')
    }

    return (
        <div className={styles.anketBody}>
            <div>

                <div>
                    <p> Рада знайомству, я Олена. Психолог і бла бла бла і так далі і тому подібне</p>
                    <p>Як я можу до Вас звертатись?</p>
                    <MyInput
                        value={name}
                        type='text'
                        placeholder='add name'
                        onChange={event => setName(event.target.value)}
                    />
                    <MyButton onClick={addGuestName} >Подтвердить</MyButton>
                    <p>{guestName} дуже приємно, Я компетентна у таких сферах... і бла бла бла і тому подібне</p>
                    <p>Ви шукаєте спеціаліста для себе, дитини чи близьких?</p>
                    <p>Выберите, кому нужна помощь:</p>
                    <WhoNeedHelp ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} ref6={ref6} addGuestChoise={addGuestChoise} />
                    <ChildAge ref0_4={ref0_4} ref6_8={ref6_8} ref12_16={ref12_16} refBaby={refBaby} refChild={refChild} refTeenager={refTeenager} addGuestChoise={addGuestChoise} />
                    <AdultOptions refPanicBtn={refPanicBtn} refPsichosomatBtn={refPsichosomatBtn} refFamilyBtn={refFamilyBtn}
                        refDependsBtn={refDependsBtn} refFobBtn={refFobBtn} refPostTravmatBtn={refPostTravmatBtn}
                        refPanic={refPanic} refPsichosomat={refPsichosomat} refFamily={refFamily} refDepends={refDepends}
                        refFob={refFob} refPostTravmat={refPostTravmat} addGuestChoise={addGuestChoise} />
                    <ChildOptions refChildPanic={refChildPanic} refChildPsichosomat={refChildPsichosomat} refChildDepends={refChildDepends}
                        refChildFob={refChildFob} refChildPostTravmat={refChildPostTravmat} refChildPanicBtn={refChildPanicBtn} refChildPsichosomatBtn={refChildPsichosomatBtn}
                        refChildDependsBtn={refChildDependsBtn} refChildFobBtn={refChildFobBtn} refChildPostTravmatBtn={refChildPostTravmatBtn} addGuestChoise={addGuestChoise} />

                    <TeenagerOptions refTeenagerCryzis={refTeenagerCryzis}
                        refTeenagerNevrot={refTeenagerNevrot} refTeenagerPsyco={refTeenagerPsyco} refTeenagerPovedinka={refTeenagerPovedinka}
                        refTeenagerEducation={refTeenagerEducation} refTeenagerIdentification={refTeenagerIdentification} refTeenagerCryzisBtn={refTeenagerCryzisBtn}
                        refTeenagerNevrotBtn={refTeenagerNevrotBtn} refTeenagerPsycoBtn={refTeenagerPsycoBtn} refTeenagerPovedinkaBtn={refTeenagerPovedinkaBtn}
                        refTeenagerEducationBtn={refTeenagerEducationBtn} refTeenagerIdentificationBtn={refTeenagerIdentificationBtn} addGuestChoise={addGuestChoise} />

                </div>
                <p>Якщо у Вас є сумніви, чи треба Вам допомога спеціаліста - залиште свій номер:</p>
                <p> <MyInput
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    type='text'
                    placeholder='add phone'
                />
                    <MyButton onClick={addGuestPhone} >Подтвердить</MyButton></p>


                <MessageGenerator guestPhone={guestPhone} guestName={guestName} guestChoise={guestChoise} />
                <p>
                    Або скористайтесь формою зворотньго зв'язку:
                </p>
                <SMSForm guestPhone={guestPhone} guestName={guestName} guestChoise={guestChoise} />
            </div >
        </div >
    )
}

export default AnketaBody;