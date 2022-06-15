import numpy as np

def calculate(list):

  # If a list containing less then 9 elements then should raise a ValueError
  if(len(list)<9):
    raise ValueError("List must contain nine numbers.")
  else:
    # Convert the list into a 3x3 Numpy array
    numpy_array = np.array(list)
    matrix = numpy_array.reshape((3, 3))

    # Return dictionary containing the mean, variance, standard deviation, max, min and sum along both axes and for the flattened matrix
    d = {}

    #axis1 is y and axis2 is x
    mean_y = np.mean(matrix, axis=0).tolist()
    mean_x = np.mean(matrix, axis=1).tolist()
    mean_all = np.mean(numpy_array).tolist()

    var_y = np.var(matrix, axis=0).tolist()
    var_x = np.var(matrix, axis=1).tolist()
    var_all = np.var(numpy_array).tolist()

    std_y = np.std(matrix, axis=0).tolist()
    std_x = np.std(matrix, axis=1).tolist()
    std_all = np.std(numpy_array).tolist()

    max_y = np.max(matrix, axis=0).tolist()
    max_x = np.max(matrix, axis=1).tolist()
    max_all = np.max(numpy_array).tolist()

    min_y = np.min(matrix, axis=0).tolist()
    min_x = np.min(matrix, axis=1).tolist()
    min_all = np.min(numpy_array).tolist()

    sum_y = np.sum(matrix, axis=0).tolist()
    sum_x = np.sum(matrix, axis=1).tolist()
    sum_all = np.sum(numpy_array).tolist()

    # Adding elements one at a time
    d['mean'] = [mean_y, mean_x, mean_all]
    d['variance'] = [var_y, var_x, var_all]
    d['standard deviation'] = [std_y, std_x, std_all]
    d['max'] = [max_y, max_x, max_all]
    d['min'] = [min_y, min_x, min_all]
    d['sum'] = [sum_y, sum_x, sum_all]
    return d