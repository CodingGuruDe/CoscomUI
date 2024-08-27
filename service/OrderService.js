export const OrderService = {
    getOrdersData() {
        return [
            {
                ProductOrderID: 'COS_EBE_DMC125FD_08092_01',
                CreateDate: '2023-06-28T11:14:00',
                ProductDate: '2023-06-28T11:14:00',
                PlantID: 'COS_EBE',
                MachineID: 'DMC125FD_08092_02',
                UrgentOrder: false,
                MarkedForDeletion: false,
                ToolCirculationOrderType: {
                    TypeID: 10,
                    Description: 'Voreinstellauftrag'
                },
                ToolCirculationOrderStatus: {
                    Description: 'Auf Verfügbarkeit geprüft',
                    StatusID: 2,
                    StatusDescription: 'Auf Verfügbarkeit geprüft',
                    StatusColor: '#ffb700'
                },
                BDEStatus: {
                    StatusID: 5,
                    StatusDescription: 'Auftrag wurde manuell angelegt',
                    StatusColor: null
                },
                PriorityCategory: {
                    PriorityCategoryID: 4,
                    Priority: 4,
                    Description: 'Auftrag',
                    PriorityColor: null
                },
                Quantity: 1,
                LabelID: null,
                Label: {
                    LabelID: 0,
                    LabelColor: '#FFFFFF00',
                    Description: null
                },
                ObjectID: null,
                RevisionIndex: null,
                OpmatCount: 2,
                OpmatsInMaintenance: 0,
                OpmatsOnMachine: 0,
                ToolsToMeasure: 0,
                ToolsToAssemble: 0,
                OpmatsInStorage: 0,
                OpmatsWithMissingParts: 2,
                AllOpmatsCommissioned: false,
                Links: [
                    {
                        rel: 'Self',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/COS_EBE_DMC125FD_08092_02'
                    },
                    {
                        rel: 'OpmatOrders',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/COS_EBE_DMC125FD_08092_02/OpmatOrders'
                    },
                    {
                        rel: 'OrderStatusImage',
                        href: 'https://rest.coscom.de/api/Images/System/COSCOM/ToolCirculation/ToolCirculationOrderStatus2'
                    }
                ],
                TypeID: 10,
                TypeDescription: 'Voreinstellauftrag',
                StatusID: 2,
                StatusDescription: 'Auf Verfügbarkeit geprüft',
                OperatingSequence: null,
                OperatingStep: null,
                ClampingNumber: 1,
                NCProgramID: null,
                MachineGroupID: 'DMG DMC 125FD'
            },
            {
                ProductOrderID: 'COS_EBE_DMC125FD_08092_02',
                CreateDate: '2023-06-28T11:14:00',
                ProductDate: '2023-06-28T11:14:00',
                PlantID: 'Werk_A',
                MachineID: 'Maschine_C',
                UrgentOrder: true,
                MarkedForDeletion: false,
                ToolCirculationOrderType: {
                    TypeID: 10,
                    Description: 'Voreinstellauftrag'
                },
                ToolCirculationOrderStatus: {
                    Description: 'Auftrag an Maschine',
                    StatusID: 7,
                    StatusDescription: 'Auftrag an Maschine',
                    StatusColor: '#10ad10'
                },
                BDEStatus: {
                    StatusID: 5,
                    StatusDescription: 'Auftrag wurde manuell angelegt',
                    StatusColor: null
                },
                PriorityCategory: {
                    PriorityCategoryID: 4,
                    Priority: 4,
                    Description: 'Auftrag',
                    PriorityColor: null
                },
                Quantity: 1,
                LabelID: null,
                Label: {
                    LabelID: 0,
                    LabelColor: '#FFFFFF00',
                    Description: null
                },
                ObjectID: null,
                RevisionIndex: null,
                OpmatCount: 2,
                OpmatsInMaintenance: 0,
                OpmatsOnMachine: 2,
                ToolsToMeasure: 0,
                ToolsToAssemble: 0,
                OpmatsInStorage: 0,
                OpmatsWithMissingParts: 0,
                AllOpmatsCommissioned: false,
                Links: [
                    {
                        rel: 'Self',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/Maschine_C-1'
                    },
                    {
                        rel: 'OpmatOrders',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/Maschine_C-1/OpmatOrders'
                    },
                    {
                        rel: 'OrderStatusImage',
                        href: 'https://rest.coscom.de/api/Images/System/COSCOM/ToolCirculation/ToolCirculationOrderStatus7'
                    }
                ],
                TypeID: 10,
                TypeDescription: 'Voreinstellauftrag',
                StatusID: 7,
                StatusDescription: 'Auftrag an Maschine',
                OperatingSequence: null,
                OperatingStep: null,
                ClampingNumber: 1,
                NCProgramID: null,
                MachineGroupID: 'Fertigungsklasse_C'
            },
            {
                ProductOrderID: 'COS_EBE_DMC125FD_08092_03',
                CreateDate: '2023-06-28T11:14:00',
                ProductDate: '2023-06-28T11:14:00',
                PlantID: 'Werk_A',
                MachineID: 'Maschine_A',
                UrgentOrder: true,
                MarkedForDeletion: true,
                ToolCirculationOrderType: {
                    TypeID: 0,
                    Description: 'Betriebsmittelauftrag'
                },
                ToolCirculationOrderStatus: {
                    Description: 'Teilweise an der Maschine',
                    StatusID: 6,
                    StatusDescription: 'Teilweise an der Maschine',
                    StatusColor: '#156eca'
                },
                BDEStatus: {
                    StatusID: 40,
                    StatusDescription: 'Auftrag wurde am InfoPOINT VM zum Löschen freigegeben',
                    StatusColor: null
                },
                PriorityCategory: {
                    PriorityCategoryID: 4,
                    Priority: 4,
                    Description: 'Auftrag',
                    PriorityColor: null
                },
                Quantity: 1,
                LabelID: null,
                Label: {
                    LabelID: 0,
                    LabelColor: '#FFFFFF00',
                    Description: null
                },
                ObjectID: 'Artikelnummer_B',
                RevisionIndex: 'A',
                OpmatCount: 9,
                OpmatsInMaintenance: 0,
                OpmatsOnMachine: 3,
                ToolsToMeasure: 1,
                ToolsToAssemble: 1,
                OpmatsInStorage: 3,
                OpmatsWithMissingParts: 0,
                AllOpmatsCommissioned: false,
                ToolCirculationOrderSteps: [
                    {
                        ObjectID: 'Artikelnummer_B',
                        RevisionIndex: 'A',
                        WorkingPlan: '10000',
                        OperatingSequence: '1',
                        OperatingStep: 10,
                        ClampingNumber: 1,
                        NCProgramID: '93fffabf-81d1-412a-b678-edd2565f4c24',
                        MachineGroupID: 'Fertigungsklasse_A'
                    }
                ],
                Links: [
                    {
                        rel: 'Self',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/00000011'
                    },
                    {
                        rel: 'OpmatOrders',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/00000011/OpmatOrders'
                    },
                    {
                        rel: 'ArticleImage',
                        href: 'https://rest.coscom.de/api/Images/Articles/Artikelnummer_B/A'
                    },
                    {
                        rel: 'OrderStatusImage',
                        href: 'https://rest.coscom.de/api/Images/System/COSCOM/ToolCirculation/ToolCirculationOrderStatus6'
                    }
                ],
                TypeID: 0,
                TypeDescription: 'Betriebsmittelauftrag',
                StatusID: 6,
                StatusDescription: 'Teilweise an der Maschine',
                OperatingSequence: '1',
                OperatingStep: 10,
                ClampingNumber: 1,
                NCProgramID: '93fffabf-81d1-412a-b678-edd2565f4c24',
                MachineGroupID: 'Fertigungsklasse_A'
            },
            {
                ProductOrderID: 'COS_EBE_DMC125FD_09192_01',
                CreateDate: '2023-06-28T11:14:00',
                ProductDate: '2023-06-28T11:14:00',
                PlantID: 'COS_EBE',
                MachineID: 'DMC125FD_08092_02',
                UrgentOrder: false,
                MarkedForDeletion: false,
                ToolCirculationOrderType: {
                    TypeID: 10,
                    Description: 'Voreinstellauftrag'
                },
                ToolCirculationOrderStatus: {
                    Description: 'Auftrag an Maschine',
                    StatusID: 7,
                    StatusDescription: 'Auftrag an Maschine',
                    StatusColor: '#10ad10'
                },
                BDEStatus: {
                    StatusID: 5,
                    StatusDescription: 'Auftrag wurde manuell angelegt',
                    StatusColor: null
                },
                PriorityCategory: {
                    PriorityCategoryID: 4,
                    Priority: 4,
                    Description: 'Auftrag',
                    PriorityColor: null
                },
                Quantity: 1,
                LabelID: null,
                Label: {
                    LabelID: 0,
                    LabelColor: '#FFFFFF00',
                    Description: null
                },
                ObjectID: null,
                RevisionIndex: null,
                OpmatCount: 0,
                OpmatsInMaintenance: 0,
                OpmatsOnMachine: 0,
                ToolsToMeasure: 0,
                ToolsToAssemble: 0,
                OpmatsInStorage: 0,
                OpmatsWithMissingParts: 0,
                AllOpmatsCommissioned: false,
                Links: [
                    {
                        rel: 'Self',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/COS_EBE_DMC125FD_08092_02_1'
                    },
                    {
                        rel: 'OpmatOrders',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/COS_EBE_DMC125FD_08092_02_1/OpmatOrders'
                    },
                    {
                        rel: 'OrderStatusImage',
                        href: 'https://rest.coscom.de/api/Images/System/COSCOM/ToolCirculation/ToolCirculationOrderStatus7'
                    }
                ],
                TypeID: 10,
                TypeDescription: 'Voreinstellauftrag',
                StatusID: 7,
                StatusDescription: 'Auftrag an Maschine',
                OperatingSequence: null,
                OperatingStep: null,
                ClampingNumber: 1,
                NCProgramID: null,
                MachineGroupID: 'DMG DMC 125FD'
            },
            {
                ProductOrderID: 'COS_EBE_DMC125FD_09192_02',
                CreateDate: '2023-06-28T11:14:00',
                ProductDate: '2023-06-28T11:14:00',
                PlantID: 'COS_EBE',
                MachineID: 'DMC635_08092_01',
                UrgentOrder: true,
                MarkedForDeletion: false,
                ToolCirculationOrderType: {
                    TypeID: 0,
                    Description: 'Betriebsmittelauftrag'
                },
                ToolCirculationOrderStatus: {
                    Description: 'Teilweise an der Maschine',
                    StatusID: 6,
                    StatusDescription: 'Teilweise an der Maschine',
                    StatusColor: '#156eca'
                },
                BDEStatus: {
                    StatusID: 5,
                    StatusDescription: 'Auftrag wurde manuell angelegt',
                    StatusColor: null
                },
                PriorityCategory: {
                    PriorityCategoryID: 4,
                    Priority: 4,
                    Description: 'Auftrag',
                    PriorityColor: null
                },
                Quantity: 6,
                LabelID: null,
                Label: {
                    LabelID: 0,
                    LabelColor: '#FFFFFF00',
                    Description: null
                },
                ObjectID: '11',
                RevisionIndex: '1',
                OpmatCount: 14,
                OpmatsInMaintenance: 2,
                OpmatsOnMachine: 4,
                ToolsToMeasure: 0,
                ToolsToAssemble: 0,
                OpmatsInStorage: 0,
                OpmatsWithMissingParts: 8,
                AllOpmatsCommissioned: false,
                ToolCirculationOrderSteps: [
                    {
                        ObjectID: '11',
                        RevisionIndex: '1',
                        WorkingPlan: '1',
                        OperatingSequence: '10',
                        OperatingStep: 10,
                        ClampingNumber: 1,
                        NCProgramID: 'c77605f8-5d9a-4e82-b6e3-d110cd384db5',
                        MachineGroupID: 'DMG DMC 635'
                    }
                ],
                Links: [
                    {
                        rel: 'Self',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/11'
                    },
                    {
                        rel: 'OpmatOrders',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/11/OpmatOrders'
                    },
                    {
                        rel: 'ArticleImage',
                        href: 'https://rest.coscom.de/api/Images/Articles/11/1'
                    },
                    {
                        rel: 'OrderStatusImage',
                        href: 'https://rest.coscom.de/api/Images/System/COSCOM/ToolCirculation/ToolCirculationOrderStatus6'
                    }
                ],
                TypeID: 0,
                TypeDescription: 'Betriebsmittelauftrag',
                StatusID: 6,
                StatusDescription: 'Teilweise an der Maschine',
                OperatingSequence: '10',
                OperatingStep: 10,
                ClampingNumber: 1,
                NCProgramID: 'c77605f8-5d9a-4e82-b6e3-d110cd384db5',
                MachineGroupID: 'DMG DMC 635'
            },
            {
                ProductOrderID: 'COS_EBE_DMC125FD_09192_03',
                CreateDate: '2023-06-28T11:14:00',
                ProductDate: '2023-06-28T11:14:00',
                PlantID: 'COS_EBE',
                MachineID: 'DMC635_08092_01',
                UrgentOrder: false,
                MarkedForDeletion: false,
                ToolCirculationOrderType: {
                    TypeID: 0,
                    Description: 'Betriebsmittelauftrag'
                },
                ToolCirculationOrderStatus: {
                    Description: 'Teilweise an der Maschine',
                    StatusID: 6,
                    StatusDescription: 'Teilweise an der Maschine',
                    StatusColor: '#156eca'
                },
                BDEStatus: {
                    StatusID: 5,
                    StatusDescription: 'Auftrag wurde manuell angelegt',
                    StatusColor: null
                },
                PriorityCategory: {
                    PriorityCategoryID: 4,
                    Priority: 4,
                    Description: 'Auftrag',
                    PriorityColor: null
                },
                Quantity: 1,
                LabelID: null,
                Label: {
                    LabelID: 0,
                    LabelColor: '#FFFFFF00',
                    Description: null
                },
                ObjectID: '11',
                RevisionIndex: '1',
                OpmatCount: 14,
                OpmatsInMaintenance: 2,
                OpmatsOnMachine: 1,
                ToolsToMeasure: 3,
                ToolsToAssemble: 0,
                OpmatsInStorage: 0,
                OpmatsWithMissingParts: 8,
                AllOpmatsCommissioned: false,
                ToolCirculationOrderSteps: [
                    {
                        ObjectID: '11',
                        RevisionIndex: '1',
                        WorkingPlan: '1',
                        OperatingSequence: '10',
                        OperatingStep: 10,
                        ClampingNumber: 1,
                        NCProgramID: 'c77605f8-5d9a-4e82-b6e3-d110cd384db5',
                        MachineGroupID: 'DMG DMC 635'
                    }
                ],
                Links: [
                    {
                        rel: 'Self',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/18.08.2023_2_DanielGann'
                    },
                    {
                        rel: 'OpmatOrders',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/18.08.2023_2_DanielGann/OpmatOrders'
                    },
                    {
                        rel: 'ArticleImage',
                        href: 'https://rest.coscom.de/api/Images/Articles/11/1'
                    },
                    {
                        rel: 'OrderStatusImage',
                        href: 'https://rest.coscom.de/api/Images/System/COSCOM/ToolCirculation/ToolCirculationOrderStatus6'
                    }
                ],
                TypeID: 0,
                TypeDescription: 'Betriebsmittelauftrag',
                StatusID: 6,
                StatusDescription: 'Teilweise an der Maschine',
                OperatingSequence: '10',
                OperatingStep: 10,
                ClampingNumber: 1,
                NCProgramID: 'c77605f8-5d9a-4e82-b6e3-d110cd384db5',
                MachineGroupID: 'DMG DMC 635'
            },
            {
                ProductOrderID: 'COS_EBE_DMC125FD_09192_04',
                CreateDate: '2023-06-28T11:14:00',
                ProductDate: '2023-06-28T11:14:00',
                PlantID: 'COS_EBE',
                MachineID: '3222',
                UrgentOrder: false,
                MarkedForDeletion: false,
                ToolCirculationOrderType: {
                    TypeID: 10,
                    Description: 'Voreinstellauftrag'
                },
                ToolCirculationOrderStatus: {
                    Description: 'Auf Verfügbarkeit geprüft',
                    StatusID: 2,
                    StatusDescription: 'Auf Verfügbarkeit geprüft',
                    StatusColor: '#ffb700'
                },
                BDEStatus: {
                    StatusID: 5,
                    StatusDescription: 'Auftrag wurde manuell angelegt',
                    StatusColor: null
                },
                PriorityCategory: {
                    PriorityCategoryID: 4,
                    Priority: 4,
                    Description: 'Auftrag',
                    PriorityColor: null
                },
                Quantity: 1,
                LabelID: null,
                Label: {
                    LabelID: 0,
                    LabelColor: '#FFFFFF00',
                    Description: null
                },
                ObjectID: null,
                RevisionIndex: null,
                OpmatCount: 2,
                OpmatsInMaintenance: 0,
                OpmatsOnMachine: 0,
                ToolsToMeasure: 0,
                ToolsToAssemble: 0,
                OpmatsInStorage: 0,
                OpmatsWithMissingParts: 2,
                AllOpmatsCommissioned: false,
                Links: [
                    {
                        rel: 'Self',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/Multitool'
                    },
                    {
                        rel: 'OpmatOrders',
                        href: 'https://rest.coscom.de/api/ToolCirculationOrders/Multitool/OpmatOrders'
                    },
                    {
                        rel: 'OrderStatusImage',
                        href: 'https://rest.coscom.de/api/Images/System/COSCOM/ToolCirculation/ToolCirculationOrderStatus2'
                    }
                ],
                TypeID: 10,
                TypeDescription: 'Voreinstellauftrag',
                StatusID: 2,
                StatusDescription: 'Auf Verfügbarkeit geprüft',
                OperatingSequence: null,
                OperatingStep: null,
                ClampingNumber: 1,
                NCProgramID: null,
                MachineGroupID: 'D08AA'
            }
        ];
    },

    getOrdersMini() {
        return Promise.resolve(this.getOrdersData().slice(0, 6));
    },

    getUrgentOrders() {
        return Promise.resolve(this.getOrdersData().filter((order) => order.UrgentOrder));
    },

    getOrdersSmall() {
        return Promise.resolve(this.getOrdersData().slice(0, 10));
    },

    getOrders() {
        return Promise.resolve(this.getOrdersData());
    },

    getOrderssWithOrdersSmall() {
        return Promise.resolve(this.getOrdersWithOrdersData().slice(0, 10));
    },

    getOrdersWithOrders() {
        return Promise.resolve(this.getOrdersWithOrdersData());
    }
};
