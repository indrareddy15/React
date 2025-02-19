export const config = [
    {
        id: 1,
        name: "Parent 1",
        items: [
            {
                id: 2,
                name: "Parent 2",
                items: [
                    {
                        id: 3,
                        name: "Child 1",
                        items: [],
                    },
                    {
                        id: 4,
                        name: "Child 2",
                        items: [],
                    },
                    {
                        id: 8,
                        name: "Child 3",
                        items: [
                            {
                                id: 9,
                                name: "Child 4",
                                items: [],
                            },
                            {
                                id: 10,
                                name: "Child 5",
                                items: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: "Parent 3",
                items: [],
            },
            {
                id: 6,
                name: "Parent 4",
                items: [],
            },
            {
                id: 7,
                name: "Parent 5",
                items: [],
            },
        ],
    },
];
