import type { Request, Response } from 'express';
import { productService } from './product.services';
import sendResponse from '../../utility/sendResponse';

const createProduct = async (req: Request, res: Response) => {
  const userId = req?.user?.id;
  const reqBody = req.body;

  try {
    const result = await productService.productCreateIntoDB(reqBody, userId);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Product create failed',
    });
  }
};

export const productController = { createProduct };
