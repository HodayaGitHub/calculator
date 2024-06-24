import { Request, Response } from 'express';
import { OPERATION_HEADER_NAME } from '../../common/consts';
import { Operation } from '../../common/models';

export const calculate = (req: Request, res: Response): void => {
    const { num1, num2 } = req.body;
    const operation: string | undefined = req.headers[OPERATION_HEADER_NAME] as string | undefined;
    
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send({ error: 'Invalid parameters' });
        return;
    }

    let result: number | undefined;
    switch (operation) {
        case Operation.Add:
            result = num1 + num2;
            break;
        case Operation.Subtract:
            result = num1 - num2;
            break;
        case Operation.Multiply:
            result = num1 * num2;
            break;
        case Operation.Divide:
            if (num2 === 0) {
                res.status(400).send({ error: 'Division by zero is not allowed' });
                return;
            }
            result = num1 / num2;
            break;
        default:
            res.status(400).send({ error: 'Unknown operation' });
            return;
    }

    if (result !== undefined) {
        res.send({ result });
    } else {
        res.status(500).send({ error: 'That was weird... Please try again later.' });
    }
};
